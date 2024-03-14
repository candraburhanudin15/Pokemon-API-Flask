import os
from os.path import join, dirname
from app import init_app
from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS

dotenv_path = join(dirname(__file__), ".env")
load_dotenv(dotenv_path)

config = "config.Config"

# init_app('name', config)
# name in here can be changes to project name.
app = init_app("app", config)
CORS(app)
if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        debug=app.config.get("APP_DEBUG"),
        port=app.config.get("APP_PORT"),
    )