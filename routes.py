from flask import Blueprint, request, jsonify
from database import mongo
from models import create_user, get_user, save_response, get_all_responses

routes = Blueprint("routes", __name__)


# 👤 User Registration API
@routes.route("/api/register", methods=["POST"])
def register():
    data = request.json
    if get_user(data["email"]):
        return jsonify({"error": "User already exists"}), 400
    create_user(data)
    return jsonify({"message": "User registered successfully"}), 201


# 📝 Save User Responses
@routes.route("/api/save-response", methods=["POST"])
def save_user_response():
    data = request.json
    save_response(data)
    return jsonify({"message": "Response saved successfully"}), 201


# 📊 Fetch All Responses
@routes.route("/api/get-responses", methods=["GET"])
def get_responses():
    responses = get_all_responses()
    return jsonify(responses), 200


# 🔍 Get Questionnaire Data (Static for now)
@routes.route("/api/questionnaire", methods=["GET"])
def get_questionnaire():
    questions = [
        {
            "id": 1,
            "question": "How often do you feel stressed?",
            "options": ["Never", "Rarely", "Sometimes", "Often", "Always"],
        },
        {
            "id": 2,
            "question": "Do you experience difficulty concentrating?",
            "options": ["No", "Occasionally", "Frequently", "Always"],
        },
    ]
    return jsonify(questions), 200
