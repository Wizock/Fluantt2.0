import json, os, requests
from flask.helpers import url_for
from werkzeug.security import check_password_hash
from flask import Blueprint, render_template, request, session, jsonify
from flask_login import login_required, current_user, login_user, logout_user
from werkzeug.utils import redirect
from authlib.integrations.requests_client import OAuth2Session
from flask_session import Session

auth = Blueprint('authentication', __name__)
from backend.__init__ import db
from backend.models import _localuser

@login_required
@auth.route('/username', methods=['GET'])
def yourMethod():
    username = current_user.username
    password = current_user.password

    response = jsonify({'username': username, 'password': password})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@auth.route('/register',methods=['POST','GET'])
def register():
    if request.method=="POST":
        email    =  request.json['email'] 
        username =  request.json['username']
        password =  request.json['password']
        firstnam =  request.json['firstname']
        lastname =  request.json['lastname']

        print(email,
            username,
            password,
            firstnam,
            lastname,
            )

        userReg = _localuser(
            email,
            username,
            password,
            firstnam,
            lastname,
        )
        db.session.add(userReg)
        db.session.commit()
        print('succesful register')
        return {"post ":"yes"}
    if request.method=="GET":
        return "this is the register route from the auth api <br><br><br> this is the address https://127.0.0.1:5000/register"
        

@auth.route('/login', methods=['POST'])
def postTest():
    print('hello world')
    username = request.json['username']
    password = request.json['password']
    print(f'username:{username} password:{password}')
    data = jsonify(request.json)
    data.headers.add('Access-Control-Allow-Origin', '*')
    return f"<h1>{request.get_json()}</h1>"

