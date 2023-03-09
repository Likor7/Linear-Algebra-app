from flask import (
    render_template,
    Blueprint,
    request,
    send_file,
)
from app.models import Matrix
import os

matrix_calc_blueprint = Blueprint(
    "matrix_calc", __name__, url_prefix="/calculator/matrix"
)


@matrix_calc_blueprint.route("/", methods=["GET"])
def calculator():
    return render_template("calc/matrixCalc.html", rows=3, cols=3)


@matrix_calc_blueprint.route("/", methods=["POST"])
def calculator_post():
    args = request.form.to_dict()

    matrix_dict_a = {k: v for k, v in args.items() if k.startswith("a")}
    rows_a = max([int(key.split("_")[1]) for key in matrix_dict_a.keys()]) + 1
    cols_a = max([int(key.split("_")[2]) for key in matrix_dict_a.keys()]) + 1
    matrix_a = Matrix.fromdict(matrix_dict_a, rows_a, cols_a)

    matrix_dict_b = {k: v for k, v in args.items() if k.startswith("b")}
    rows_b = max([int(key.split("_")[1]) for key in matrix_dict_b.keys()]) + 1
    cols_b = max([int(key.split("_")[2]) for key in matrix_dict_b.keys()]) + 1
    matrix_b = Matrix.fromdict(matrix_dict_b, rows_b, cols_b)
    result = None

    try:
        if request.form.get("save_button_a"):
            download_dir = os.path.join(os.path.expanduser("~"), "Downloads")
            with open(os.path.join(download_dir, "matrixA.txt"), "w") as f:
                for i in range(rows_a):
                    for j in range(cols_a):
                        f.write(str(matrix_a.data[i][j]) + " ")
                    f.write("\n")
            return send_file(
                os.path.join(download_dir, "matrixA.txt"), as_attachment=True
            )

        elif request.form.get("save_button_b"):
            download_dir = os.path.join(os.path.expanduser("~"), "Downloads")
            with open(os.path.join(download_dir, "matrixB.txt"), "w") as f:
                for i in range(rows_b):
                    for j in range(cols_b):
                        f.write(str(matrix_b.data[i][j]) + " ")
                    f.write("\n")
            return send_file(
                os.path.join(download_dir, "matrixB.txt"), as_attachment=True
            )

        elif request.form.get("calc_button_a"):
            result = [
                matrix_a.max_norm(),
                matrix_a.euclidean_norm(),
                matrix_a.transpose(),
            ]
            return render_template(
                "calc/matrixCalc.html",
                rowsA=rows_a,
                colsA=cols_a,
                rowsB=rows_b,
                colsB=cols_b,
                matrixA=matrix_a.data,
                matrixB=matrix_b.data,
                norm_1=result[0],
                norm_2=result[1],
                result=result[2],
            )
        elif request.form.get("calc_button_b"):
            result = [
                matrix_b.max_norm(),
                matrix_b.euclidean_norm(),
                matrix_b.transpose(),
            ]
            return render_template(
                "calc/matrixCalc.html",
                rowsA=rows_a,
                colsA=cols_a,
                rowsB=rows_b,
                colsB=cols_b,
                matrixA=matrix_a.data,
                matrixB=matrix_b.data,
                norm_1=result[0],
                norm_2=result[1],
                result=result[2],
            )

        elif request.form.get("mul_button"):
            result = (matrix_a * matrix_b).data

        elif request.form.get("sum_button"):
            result = (matrix_a + matrix_b).data

        elif request.form.get("sub_button"):
            result = (matrix_a - matrix_b).data
    except ValueError as ve:
        return render_template(
            "calc/matrixCalc.html",
            rowsA=rows_a,
            colsA=cols_a,
            rowsB=rows_b,
            colsB=cols_b,
            matrixA=matrix_a.data,
            matrixB=matrix_b.data,
            exception=ve,
        )
    except Exception as e:
        return render_template(
            "calc/matrixCalc.html",
            rowsA=rows_a,
            colsA=cols_a,
            rowsB=rows_b,
            colsB=cols_b,
            matrixA=matrix_a.data,
            matrixB=matrix_b.data,
            exception=e,
        )
    return render_template(
        "calc/matrixCalc.html",
        rowsA=rows_a,
        colsA=cols_a,
        rowsB=rows_b,
        colsB=cols_b,
        matrixA=matrix_a.data,
        matrixB=matrix_b.data,
        result=result,
    )
