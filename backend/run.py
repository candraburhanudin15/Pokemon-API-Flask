import os
from os.path import join, dirname
from app import init_app
from dotenv import load_dotenv
import json
import requests
import mysql.connector
from flask import Flask, jsonify, redirect, render_template, request

dotenv_path = join(dirname(__file__), ".env")
load_dotenv(dotenv_path)

config = "config.Config"
app = init_app("app", config)

mydb = mysql.connector.connect(
    host= app.config.get("DB_HOST"),
    database= app.config.get("DB_DATABASE"),
    user= "root",
    password= app.config.get("DB_PASSWORD")
)

db = mydb.cursor()

# Ensure responses aren't cached
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response
    
#landing page
@app.route("/")
def index():
    response = requests.get("http://localhost:8000/pokemon/poke")
    if response.status_code == 200:
        data = response.json()
        # Ambil daftar nama Pokemon
        pokemon_names = [pokemon["name"] for pokemon in data["results"]]
        # Kirim template HTML ke index.html
        return render_template("index.html", pokemon_names=pokemon_names)
    else:
        return "Failed to retrieve Pokemon data", 500
                       
@app.route("/hello") 
def hello(): 
    return "Hello, Test Route"

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        debug=app.config.get("APP_DEBUG"),
        port=app.config.get("APP_PORT"),
    )
