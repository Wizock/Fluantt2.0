from authlib.integrations.flask_client import OAuth
from flask_login.login_manager import LoginManager
from flask_sqlalchemy import SQLAlchemy
from backend.API.authapi import auth
from datetime import timedelta
from flask_cors import CORS
from flask import Flask

def create_app():
    appvar = Flask(__name__)
    appvar.secret_key = 'N7rWygdU6v'
    appvar.register_blueprint(auth)
    appvar.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database/fluantt.sqlite3'
    appvar.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
    CORS(appvar, resources={r'/*': {'origins': '*'}})
    appvar.config['CORS_HEADERS'] = 'Content-Type'
    appvar.config['SESSION_COOKIE_NAME'] = 'google-login-session'
    appvar.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes=5)
    return appvar

app = create_app()
oauth = OAuth(app)
db = SQLAlchemy(app)