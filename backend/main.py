import json
import os

import firebase_admin
from firebase_admin import credentials, firestore
from flask import Flask, request, render_template
from flask_cors import CORS
import ModelFunction

current_dir = os.path.dirname(os.path.abspath(__file__))
auth_json_path = os.path.join(current_dir, 'gcp-3f8449c9ed6e.json') 

cred = credentials.Certificate('gcp-3f8449c9ed6e.json')
firebase_admin.initialize_app(cred)
db = firestore.client()
messages = db.collection(u'messages')


app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Hello, World!"
    

@app.route("/map")
def mapRequest():
    return render_template('map.html')


@app.route("/calculate", methods=["POST"])
def calculate():
    slider_value = request.json["sliderValue"]
    med_white_value = request.json["medWhiteValue"]
    print(slider_value, med_white_value)
    print(ModelFunction.predictor(med_white_value, slider_value))
    return ModelFunction.predictor(med_white_value, slider_value)


@app.route("/helper-form")
def helper_form():
    return {"1": 2, "3": 4}


@app.route("/message-board",methods=['GET','POST'])
def message_board():
    if request.method == 'GET':
        docs = messages.stream()
        return json.dumps([doc.to_dict() for doc in docs])
    else:
        data = request.json
        db.collection(u'messages').document(data['username']).set(data)
        return data

if __name__ == "__main__":
    app.run()

