import os
import pandas as pd
import numpy as np
import requests
import bs4 
import time
from bs4 import BeautifulSoup as bs
from splinter import Browser
from pprint import pprint
import config
from config import api_key
import json
from flask import Flask, jsonify, render_template

app = Flask(__name__)


@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/trivia")
def jokes():
    joke_response = requests.get(f"https://api.spoonacular.com/food/trivia/random", params={"apiKey" : api_key})
    joke_json = joke_response.json()
    return jsonify(joke_json)

 


if __name__ == "__main__":
    app.run(debug="true")







