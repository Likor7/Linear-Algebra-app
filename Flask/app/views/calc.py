from flask import render_template, Blueprint, request, send_file
from werkzeug.datastructures import ImmutableMultiDict
from app.utils import create_matrix_from_dict, create_vector_from_dict
import subprocess
import json
import os

calc_blueprint = Blueprint("calc", __name__)


@calc_blueprint.route("/calculator/", methods=["GET"])
def calculator():
    return render_template("calc/calc.html", rows=3, cols=3)

@calc_blueprint.route("/calculator/", methods=["POST"])
def calculator_post():
    args = request.form.to_dict()
    matrix_dict= {k: v for k, v in args.items() if k.startswith('a')}
    vector_dict= {k: v for k, v in args.items() if k.startswith('b')}
    rows = max([int(key.split('_')[1]) for key in matrix_dict.keys()]) + 1
    cols = max([int(key.split('_')[2]) for key in matrix_dict.keys()]) + 1
    matrix = create_matrix_from_dict(matrix_dict, rows, cols)
    vector = create_vector_from_dict(vector_dict)


    if request.form.get('calc_button'):
        matrix_str = json.dumps(matrix)
        vector_str = json.dumps(vector)
        cmd = [
            "/Users/likor7/University/3.2/Algebra/Linear-Algebra-app/Calculation/Calc/bin/Debug/net6.0/Calc",
            matrix_str,
            vector_str,
        ]
        result = subprocess.run(cmd, capture_output=True, text=True)
        result_data = json.loads(result.stdout)
        return render_template("calc/calc.html", rows=rows, cols=cols, data=matrix, data_b=vector, result=result_data)
    
    
    elif request.form.get('save_button'):
        download_dir = os.path.join(os.path.expanduser('~'), 'Downloads')
        with open(os.path.join(download_dir, 'matrix.txt'), 'w') as f:
            for i in range(rows):
                for j in range(cols):
                    f.write(str(matrix[i][j]) + ' ')
                f.write(str(vector[i]) + '\n')
        return send_file(os.path.join(download_dir, 'matrix.txt'), as_attachment=True)
    return "Failed", 400


@calc_blueprint.route("/upload/", methods=["GET"])
def upload():
    return render_template("calc/upload.html")


@calc_blueprint.route("/calculator/uploaded/", methods=["POST"])
def upload_post():
    file = request.files['file']
    matrix = []
    vector = []
    for line in file:
        row = [float(x) for x in line.decode().split()]
        matrix.append(row[:-1])
        vector.append(row[-1])
    return render_template("calc/calc.html", rows=len(matrix), cols=len(matrix[0]), data=matrix, data_b=vector, uploaded=True)