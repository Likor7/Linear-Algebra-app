from flask import render_template, Blueprint, request
import json
import os

upload_blueprint = Blueprint("upload", __name__, url_prefix="/calculator")


@upload_blueprint.route("/upload/", methods=["GET"])
def upload():
    return render_template("calc/upload.html")


# @upload_blueprint.route("/uploaded/", methods=["POST"])
# def upload_post():
#     fileA = request.files.get('fileA')
#     fileB = request.files.get('fileB')
#     matrix = []
#     vector = []
#     for line in file:
#         row = [float(x) for x in line.decode().split()]
#         matrix.append(row[:-1])
#         vector.append(row[-1])
#     return render_template(
#         "calc/systemsCalc.html",
#         rows=len(matrix),
#         cols=len(matrix[0]),
#         data=matrix,
#         data_b=vector,
#         uploaded=True,
#     )


@upload_blueprint.route("/matrix/uploaded/", methods=["POST"])
def upload_post():
    fileA = request.files.get("fileA")
    fileB = request.files.get("fileB")
    matrix_a = []
    matrix_b = []
    for line in fileA:
        row = [float(x) for x in line.decode().split()]
        matrix_a.append(row[:])
    for line in fileB:
        row = [float(x) for x in line.decode().split()]
        matrix_b.append(row[:])
    return render_template(
        "calc/matrixCalc.html",
        rowsA=len(matrix_a),
        colsA=len(matrix_a[0]),
        rowsB=len(matrix_b),
        colsB=len(matrix_b[0]),
        matrixA=matrix_a,
        matrixB=matrix_b,
        uploaded=True,
    )
