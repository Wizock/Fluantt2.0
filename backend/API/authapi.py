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


@auth.route('/username', methods=['GET'])
def yourMethod():
    response = jsonify({'some': 'data'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@auth.route('/posttest', methods=['POST'])
def postTest():
    username = request.json['username']
    password = request.json['password']
    print(f'username:{username} password:{password}')
    data = jsonify(request.json)
    data.headers.add('Access-Control-Allow-Origin', '*')
    return f"<h1>{request.get_json()}</h1>"

