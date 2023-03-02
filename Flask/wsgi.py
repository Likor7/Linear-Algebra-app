#!/user/bin/env python
from app import create_app


app = create_app()


# flask client context setup
@app.shell_context_processor
def get_context():
    """Objects exposed here will be automatically available from the shell."""
    return dict(app=app)


if __name__ == "__main__":
    app.run()
