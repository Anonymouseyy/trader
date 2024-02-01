import marketwatch
import os
import deta
from dotenv import load_dotenv
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/home", methods=["GET"])
def home():
    return jsonify({
        "message": "trader"
    })


if __name__ == "__main__":
    app.run(debug=True, port=8080)

# check a watchlist
# pick random stock
# if up then sell
# if down > 10% sell
# deta to run
