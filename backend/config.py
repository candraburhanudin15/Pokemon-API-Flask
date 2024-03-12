import os

class Config(object):
    # App default config
    APP_ENV = os.environ.get('APP_ENV',"127.0.0.1")
    APP_DEBUG = os.environ.get("APP_DEBUG", False)
    APP_PORT = os.environ.get("APP_PORT",8000)
    TEMPLATE_FOLDER = 'templates'
