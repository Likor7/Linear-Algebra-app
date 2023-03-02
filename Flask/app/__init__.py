import os
from flask import Flask, render_template
from werkzeug.exceptions import HTTPException


def create_app(environment="development"):
    from config import config
    from app.views import main_blueprint, calc_blueprint

    # Instantiate app
    app = Flask(__name__)

    # Setup configs
    env = os.getenv("FLASK_ENV", environment)
    app.config.from_object(config[env])
    config[env].configure(app)

    # Register blueprints here
    app.register_blueprint(main_blueprint)
    app.register_blueprint(calc_blueprint)

    @app.errorhandler(HTTPException)
    def handle_http_error(exc):
        return render_template("error.html", error=exc), exc.code

    return app
