import os

for file in os.listdir():
    if not file == "main.py":
        print("{", end="")
        print(f"\n    image: \"/images/brawlStars/players/sprays/{file}\"")
        print("},")
