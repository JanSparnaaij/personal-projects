from flask import Flask, render_template
from app.fetcher import fetch_all_matches

app = Flask(__name__)

@app.route('/')
def index():
    matches = fetch_all_matches()
    return render_template('index.html', matches=matches)