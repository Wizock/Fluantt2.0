from authlib.integrations.flask_client import OAuth
from flask_login.login_manager import LoginManager
from flask_sqlalchemy import SQLAlchemy
from backend.API.authapi import auth
from datetime import timedelta
from flask_cors import CORS
import flask_cors
from flask import Flask
import flask_praetorian
from datetime import timedelta

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
    appvar.config['JWT_ACCESS_LIFESPAN'] = {'hours': 24}
    appvar.config['JWT_REFRESH_LIFESPA'] = {'days': 30}

    return appvar

app = create_app()
with app.app_context():
    oauth = OAuth(app)
    cors = flask_cors.CORS()
    db = SQLAlchemy(app)
    from backend.models import _localuser
    guard = flask_praetorian.Praetorian(app, _localuser)

