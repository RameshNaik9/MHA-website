import json


def parse_json(data):
    """Convert MongoDB Cursor to JSON"""
    return json.loads(json.dumps(data, default=str))
