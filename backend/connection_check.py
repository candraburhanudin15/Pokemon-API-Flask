import mysql.connector
from mysql.connector import Error

import os
from os.path import join, dirname
from app import init_app
from dotenv import load_dotenv


def test_connection():
    try:
        dotenv_path = join(dirname(__file__), ".env")
        load_dotenv(dotenv_path)

        config = "config.Config"

        app = init_app("app", config)
        # Menghubungkan ke database
        connection = mysql.connector.connect(
            host= app.config.get("DB_HOST"),
            database= app.config.get("DB_DATABASE"),
            user= "root",
            password= app.config.get("DB_PASSWORD")
        )

        if connection.is_connected():
            print('Koneksi ke database berhasil!')
            # Menutup koneksi
            connection.close()
    except Error as e:
        print(f'Error: {e}')

if __name__ == '__main__':
    test_connection()