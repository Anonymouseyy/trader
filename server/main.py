from marketwatch import MarketWatch
import os
import deta
from dotenv import load_dotenv
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

load_dotenv()
user = os.environ.get("USER")
password = os.environ.get("PASSWORD")
mk = MarketWatch(user, password)
game = os.environ.get("GAME")

@app.route("/api/home", methods=["GET"])
def home():
    return jsonify({
        "message": "trader"
    })


@app.route("/api/leaderboard", methods=["GET"])
def leaderboard():
    lb = mk.get_leaderboard()

    return jsonify(lb)


if __name__ == "__main__":
    app.run(debug=True, port=8080)

# check a watchlist
# pick random stock
# if up then sell
# if down > 10% sell
# deta to run
