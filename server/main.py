from marketwatch import MarketWatch
import os
from deta import Deta
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

load_dotenv()
user = os.environ.get("USER")
password = os.environ.get("PASSWORD")
mk = MarketWatch(user, password)
game = os.environ.get("GAME")

deta = Deta()
db = deta.Base("user")

@app.route("/api/home", methods=["GET"])
def home():
    return jsonify({
        "message": "trader"
    })


@app.route("/api/leaderboard", methods=["GET"])
def leaderboard():
    lb = mk.get_leaderboard("zest-fest")

    return jsonify(lb[1:])


@app.route("/api/watchlist", methods=["GET"])
def watchlist():
    wl = mk.get_watchlist("3599069723688224")
    ret = []

    for item in wl["Items"]:
        tick = item["Ticker"]

        try:
            price = mk.get_price(tick)[len(tick)+3:]
        except:
            price = "Unknown"

        ret.append({
            "ticker": tick,
            "company": item["CompanyName"],
            "price": price
        })

    return jsonify(ret)


@app.route("/api/account", methods=["GET", "POST"])
def account():
    if request.method == "POST":
        user = request.get_json()
        db.put(user, "data")
        return jsonify("")
    
    if request.method == "GET":
        user = db.get("data")

        if user is None:
            empty = {
                "email": "",
                "password": "",
                "watchlist": ""
            }
            
            db.put(empty, "data")
            user = empty
        
        return jsonify(user)
