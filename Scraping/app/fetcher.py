from playwright.sync_api import sync_playwright

def fetch_all_matches():
    url = "https://www.oddsportal.com/soccer/netherlands/eredivisie/"

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Navigating to the page...")
        page.goto(url)

        # Save the HTML content for debugging
        with open("debug.html", "w", encoding="utf-8") as f:
            f.write(page.content())

        try:
            page.wait_for_selector('div[data-v-b8d70024] > div[id]', timeout=60000)

            match_containers = page.locator('div[data-v-b8d70024] > div[id]')
            match_count = match_containers.count()
            print(f"Found {match_count} match containers.")

            all_matches = []
            processed_ids = set()

            for i in range(match_count):
                try:
                    container = match_containers.nth(i)
                    row_id = container.get_attribute("id")

                    if row_id in processed_ids:
                        continue
                    processed_ids.add(row_id)

                    home_team = container.locator('a[title]').nth(0).text_content().strip()
                    away_team = container.locator('a[title]').nth(1).text_content().strip()

                    odds = container.locator('div[data-v-34474325] p')
                    home_odd = odds.nth(0).text_content().strip()
                    draw_odd = odds.nth(1).text_content().strip()
                    away_odd = odds.nth(2).text_content().strip()

                    all_matches.append({
                        "home_team": home_team,
                        "away_team": away_team,
                        "odds": {
                            "home": home_odd,
                            "draw": draw_odd,
                            "away": away_odd
                        }
                    })
                except Exception as e:
                    print(f"Error processing match {i + 1}: {e}")
                    continue

            browser.close()
            return all_matches

        except Exception as e:
            print(f"Error fetching matches: {e}")
            browser.close()
            return []
