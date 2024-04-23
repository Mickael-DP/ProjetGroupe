from . import user_bp
from flask import jsonify
from models.user import User

@user_bp.route('/users')
def get_users():
    users = User.query.all()
    user_list = [{'id': user.id, 'username': user.username, 'email': user.email} for user in users]
    return jsonify(user_list)
