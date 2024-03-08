from marketwatch import MarketWatch
import os
from deta import Deta
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

deta = Deta()
db = deta.Base("user")
user = db.get("data")

if user is None:
    mk = None
    game = None
    wl = None
elif user:
    try:
        mk = MarketWatch(user["email"], user["password"])
    except:
        mk = None

if mk is not None:
    games = mk.get_games()
    
    if user["game"] not in [x["id"] for x in games]:
        game = None
    else:
        game = user["game"]

@app.route("/api/leaderboard", methods=["GET"])
def leaderboard():
    if mk is None or game is None:
        return jsonify("Invalid Marketwatch Information")
    lb = mk.get_leaderboard(game)

    return jsonify(lb[1:])


@app.route("/api/watchlist", methods=["GET"])
def watchlist():
    if mk is None:
        return jsonify("Invalid Marketwatch Information")
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
                "watchlist": "",
                "game": ""
            }
            
            db.put(empty, "data")
            user = empty
        
        return jsonify(user)
