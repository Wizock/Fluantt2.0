
from werkzeug.security import check_password_hash
from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user, login_user, logout_user
from werkzeug.utils import redirect
from flask_session import Session
from authlib.integrations.flask_client import OAuth 
import os
from datetime import timedelta

auth = Blueprint('authentication', __name__)
from backend.__init__ import db, oauth
from backend.models import _localuser

google = oauth.register(
    name = 'google',
    client_id = "1051638467361-9u2jc677sacg293dg1hso07bnkt0eagt.apps.googleusercontent.com",
    client_secret = "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",
    access_token_url = "https://accounts.google.com/o/oauth2/token",
    access_token_params = None,
    authorize_url = 'https://www.googleapis.com/0/oauth2/auth',
    authorize_params = None,
    api_base_url = 'https://www.googleapis.com/0/oauth2/v1/',
    
)

@auth.route('/register',methods=['POST','GET'])
def register():
    if request.method=="POST":
        email    =  request.json['email'] 
        username =  request.json['username']
        password =  request.json['password']
        firstnam =  request.json['firstname']
        lastname =  request.json['lastname']

        print(email,username,password,firstnam,lastname,)

        userReg = _localuser(email,username,password,firstnam,lastname,)
        db.session.add(userReg)
        db.session.commit()
        print('succesful register')
        return {"post ":"yes"}
    if request.method=="GET":
        return "this is the register route from the auth api <br><br><br> this is the address https://127.0.0.1:5000/register"
        

@auth.route('/login', methods=['GET'])
def login_route():
    if request.method == "GET":
        print()