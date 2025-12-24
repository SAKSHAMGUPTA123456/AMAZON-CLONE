import os
from flask_cors import CORS
from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from dotenv import load_dotenv
import requests

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)
# Config
MONGO_URI = os.environ.get("MONGO_URI")
app.config['JWT_SECRET_KEY'] = os.environ.get("JWT_SECRET_KEY")
jwt = JWTManager(app)

# MongoDB Atlas client
client = MongoClient(MONGO_URI)
db = client.amazon_clone
users_collection = db.users

# -------------------------------
# Google Sign-up / Sign-in
# -------------------------------
@app.route('/google-signup', methods=['POST'])
def google_signup():
    data = request.json
    id_token = data.get('id_token')

    if not id_token:
        return jsonify({"msg": "ID token required"}), 400

    # Verify token with Google
    response = requests.get(f"https://oauth2.googleapis.com/tokeninfo?id_token={id_token}")
    if response.status_code != 200:
        return jsonify({"msg": "Invalid Google token"}), 401

    user_info = response.json()
    email = user_info.get('email')
    name = user_info.get('name')

    # Check if user exists
    user = users_collection.find_one({"email": email})
    if not user:
        # New user → create in DB
        result = users_collection.insert_one({"email": email, "name": name, "google_signup": True})
        user_id = str(result.inserted_id)
    else:
        # Existing user → use existing id
        user_id = str(user['_id'])

    # Create JWT token
    access_token = create_access_token(identity=user_id)
    return jsonify({"access_token": access_token, "email": email, "name": name})


if __name__ == '__main__':
    app.run(debug=True)
