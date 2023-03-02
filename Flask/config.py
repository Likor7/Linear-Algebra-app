import os

base_dir = os.path.dirname(os.path.abspath(__file__))


class BaseConfig:
    """Base configuration"""

    APP_NAME = os.getenv("APP_NAME", "Linear Algebra app")

    @staticmethod
    def configure(app):
        pass


class DevelopmentConfig(BaseConfig):
    """Development configuration"""

    DEBUG = True


class ProductionConfig(BaseConfig):
    """Production configuration"""

    DEBUG = False


config = dict(development=DevelopmentConfig, production=ProductionConfig)
