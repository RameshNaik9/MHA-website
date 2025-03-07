from flask_pymongo import PyMongo

mongo = PyMongo()  # Initialize PyMongo


def init_db(app):
    """Initialize database connection"""
    mongo.init_app(app)
