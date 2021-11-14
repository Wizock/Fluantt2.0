import json, os, requests
import flask
from flask.helpers import url_for
from werkzeug.security import check_password_hash
from flask import Blueprint, render_template, request, session, jsonify
from flask_login import login_required, current_user, login_user, logout_user
from werkzeug.utils import redirect
from authlib.integrations.requests_client import OAuth2Session
from flask_session import Session

auth = Blueprint('authentication', __name__)
from backend.__init__ import db, guard
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

        print(email,username,password,firstnam,lastname,)

        userReg = _localuser(email,username,password,firstnam,lastname,)
        db.session.add(userReg)
        db.session.commit()
        print('succesful register')
        return {"post ":"yes"}
    if request.method=="GET":
        return "this is the register route from the auth api <br><br><br> this is the address https://127.0.0.1:5000/register"
        

@auth.route('/login', methods=['POST'])
def login_route():
    if request.method == "POST":
        req = flask.request.get_json(force=True)
        username = req.get('username', None)
        password = req.get('password', None)
        user = guard.authenticate(username, password)
        ret = {'access_token': guard.encode_jwt_token(user)}
        return ret, 200
    if request.method== 'GET':
        return '<h1 style="align:center;">this is the login page</h1>'


'''
curl https://localhost:5000/login -X POST -d '{"username":"Yasoob","password":"strongpassword"}'
'''