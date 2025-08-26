from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

client = MongoClient(os.getenv('MONGO_URI'))
db = client.thai_delight
orders = db.orders

@app.route('/api/orders', methods=['POST'])
def create_order():
    try:
        order_data = request.get_json()
        result = orders.insert_one(order_data)
        return jsonify({
            'success': True,
            'inserted_id': str(result.inserted_id)
        }), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/menu', methods=['GET'])
def get_menu():
    try:
        menu_items = list(db.menu.find({}, {'_id': 0}))
        return jsonify(menu_items), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)