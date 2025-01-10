from flask import Flask, render_template, request
from app.fetcher import fetch_all_matches

app = Flask(__name__)

# Define the leagues and their URLs
LEAGUES = {
    "eredivisie": "https://www.oddsportal.com/soccer/netherlands/eredivisie/",
    "premier_league": "https://www.oddsportal.com/football/england/premier-league/",
}

@app.route('/')
def index():
    # Get the selected league from the query parameters (default to 'eredivisie')
    selected_league = request.args.get('league', 'eredivisie')
    url = LEAGUES.get(selected_league, LEAGUES['eredivisie'])

    # Fetch matches for the selected league
    matches = fetch_all_matches(url)
    return render_template('index.html', matches=matches, leagues=LEAGUES, selected_league=selected_league)
