from authlib.integrations.sqla_oauth2 import OAuth2TokenMixin
from werkzeug.security import check_password_hash, generate_password_hash
from flask_login import UserMixin, AnonymousUserMixin
from flask_sqlalchemy import SQLAlchemy
from .__init__ import db

class _localuser(AnonymousUserMixin, UserMixin,db.Model):
    __tablename__ = '_localuser'
    id       = db.Column(db.Integer(), primary_key=True)
    email    = db.Column(db.String(), nullable=False)
    username = db.Column(db.String(), nullable=False)
    password = db.Column(db.String(), nullable=False)
    firstname= db.Column(db.String(), nullable=False)
    lastname = db.Column(db.String(), nullable=False)

    is_authenticated = False
    is_active = False
    is_anonymous = False

    def get_id(self):
        return self.id
        
    def is_authenticated(self):
        return self.authenticated

    def __init__(self,email,username,password,firstname,lastname): 
        self.email = email
        self.username = username
        self.password = generate_password_hash(password)
        self.firstname = firstname
        self.lastname = lastname
        
    def verify_password(self, pwd):
        return check_password_hash(self.password, pwd)


class _googleAuthUser(UserMixin, db.Model):
    __tablename__ = '_googleAuthUser'
    id = db.Column(db.Integer(), primary_key = True)
    uid = db.Column(db.String(), nullable=False)
    name = db.Column(db.String(), nullable=False)
    email = db.Column(db.String(), nullable=False)
    profile_pic = db.Column(db.String(), nullable=False)
    
    is_authenticated = False
    is_active = False
    is_anonymous = False
    
    def __init__(self, uid, name, email, profile_pic):
        self.uid = generate_password_hash(uid)
        self.name = name
        self.email = email
        self.profile_pic = profile_pic
    
    def get_id(self):
        return self.uid

    def is_authenticated(self):
        return self.authenticated
    
    def verify_user(self, uid):
        return check_password_hash(self.uid, uid)
