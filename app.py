import os
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from database import init_db
from routes import routes
from config import Config

def create_app():
    app = Flask(__name__, template_folder="templates", static_folder="static")
    app.config.from_object(Config)

    # Initialize Database
    init_db(app)
    mongo = PyMongo(app)

    # Enable CORS for frontend-backend communication
    CORS(app)

    # Register API Routes
    app.register_blueprint(routes)

    # Serve HTML Pages
    @app.route("/")
    def index():
        return render_template("index.html")

    @app.route("/about")
    def about():
        return render_template("about.html")

    @app.route("/our-approach")
    def our_approach():
        return render_template("Our_Approach.html")

    # Anger Test Routes (renamed from set_A, set_B1, set_C1)
    @app.route("/anger_1")
    def anger_1():
        return render_template("anger_1.html")

    @app.route("/anger_2")
    def anger_2():
        return render_template("anger_2.html")

    @app.route("/anger_3")
    def anger_3():
        return render_template("anger_3.html")

    @app.route("/submit_anger")
    def submit():
        return render_template("submit_anger.html")

    # Academic Stress Route
    @app.route("/academic_stress")
    def academic_stress():
        return render_template("set_a_as.html")

    # API Endpoint to Save Responses in MongoDB
    @app.route("/api/save-response", methods=["POST"])
    def save_response():
        data = request.json
        if not data or "responses" not in data:
            return jsonify({"error": "Invalid request"}), 400

        # Store in MongoDB
        mongo.db.responses.insert_one({
            "email": data.get("email", "anonymous"),
            "score": data["score"],  # Store final score
            "responses": data["responses"]
        })
        
        return jsonify({"message": "Response saved successfully", "score": data["score"]}), 201


    return app


if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=5000, debug=True)
