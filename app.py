import os
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from database import init_db
from routes import routes
from config import Config


def create_app():
    app = Flask(__name__, template_folder="templates", static_folder="static")
    app.config.from_object(Config)

    # Initialize Database
    init_db(app)

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
    
    @app.route("/set_A")
    def set_a():
        return render_template("set_A.html")
    
    @app.route("/set_A-AS")
    def set_a_as():
        return render_template("set_A-AS.html")

    @app.route("/set_B1")
    def set_b1():
        return render_template("set_B1.html")



    return app


if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=5000, debug=True)
