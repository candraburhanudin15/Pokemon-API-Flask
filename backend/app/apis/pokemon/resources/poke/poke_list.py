import json
import requests
import traceback
from flask import make_response, jsonify, current_app, request
from flask_restful import Resource, reqparse
from flask_sieve import Validator



class PokeList(Resource):
    # Membuat variabel statis untuk menyimpan data
    pokemon_data = None  

    @classmethod
    def get(cls):
        if cls.pokemon_data:
            return cls.pokemon_data
         
        # Jika data belum ada, lakukan permintaan GET
        r = requests.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
        
        # Memeriksa status kode permintaan
        if r.status_code == 200:
            # Simpan data ke variabel statis
            cls.pokemon_data = r.json()
            return cls.pokemon_data
        else:
            print(f"Error: {r.status_code}")
            return None
