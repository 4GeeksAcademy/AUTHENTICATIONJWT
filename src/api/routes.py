"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import app
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


# OBTENER TODOS LOS USUARIOS:

@api.route ('/usuarios', methods = ['GET'])
def todos_los_usuarios():
    usuarios = User.query.all()

    return jsonify(usuarios.serialize()), 201

# REGISTRO DE USUARIOS:

@api.route ('/registro', methods = ['POST'])
def crear_usuario():
    data = request.get_json()
    email = data.get('email')
    password = data.get ('password')

    # VERIFICACION
    usuario = User.query.filter_by (email = email).first ()
    if usuario :
        return jsonify({'error': 'El usuario existe'}), 400
    
    # CREAR UN NUEVO USUARIO
    usuario = User(id = User.query.coun() + 1, email = email, password = password, is_active = True)
    db.session.add(usuario)
    db.session.commit()
    return jsonify(usuario.serialize()), 201     