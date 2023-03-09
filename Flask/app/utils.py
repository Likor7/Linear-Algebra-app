def create_matrix_from_dict(data: dict, rows: int, cols: int) -> list:
    matrix = [[0 for _ in range(cols)] for _ in range(rows)]

    for key, value in data.items():
        i = int(key.split("_")[1])
        j = int(key.split("_")[2])
        matrix[i][j] = float(value)

    return matrix


def create_vector_from_dict(data: dict) -> list:
    return [float(value) for value in data.values()]
