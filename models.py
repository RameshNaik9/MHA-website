from database import mongo


# Users Collection
def create_user(user_data):
    return mongo.db.users.insert_one(user_data)


def get_user(email):
    return mongo.db.users.find_one({"email": email}, {"_id": 0})


# Questionnaire Responses Collection
def save_response(response_data):
    return mongo.db.responses.insert_one(response_data)


def get_all_responses():
    return list(mongo.db.responses.find({}, {"_id": 0}))
