import math


class Matrix:
    def __init__(self, n=None, m=None, data=None):
        if not (n) and not (m):
            self.data = data
            self.n = len(self.data)
            self.m = len(self.data[0])
        else:
            self.n = n
            self.m = m
            self.data = [[0 for _ in range(m)] for _ in range(n)]

    def __add__(self, other):
        if self.n != other.n or self.m != other.m:
            raise ValueError("Matrices must be of the same size.")
        result = Matrix(self.n, self.m)
        for i in range(self.n):
            for j in range(self.m):
                result.data[i][j] = self.data[i][j] + other.data[i][j]
        return result

    def __sub__(self, other):
        if self.n != other.n or self.m != other.m:
            raise ValueError("Matrices must be of the same size.")
        result = Matrix(self.n, self.m)
        for i in range(self.n):
            for j in range(self.m):
                result.data[i][j] = self.data[i][j] - other.data[i][j]
        return result

    def __mul__(self, other):
        if isinstance(other, (int, float)):
            result = Matrix(self.n, self.m)
            for i in range(self.n):
                for j in range(self.m):
                    result.data[i][j] = self.data[i][j] * other
            return result
        elif isinstance(other, Matrix):
            if self.m != other.n:
                raise ValueError(
                    "The number of columns in the first matrix should be equal to the number of rows in the second."
                )
            result = Matrix(self.n, other.m)
            for i in range(self.n):
                for j in range(other.m):
                    dot_product = sum(
                        self.data[i][k] * other.data[k][j] for k in range(self.m)
                    )
                    result.data[i][j] = dot_product
            return result
        else:
            raise TypeError("Can only multiply a matrix by a scalar or another matrix.")

    def euclidean_norm(self):
        squared_sum = sum(sum(entry**2 for entry in row) for row in self.data)
        return math.sqrt(squared_sum)

    def max_norm(self):
        return max(max(abs(entry) for entry in row) for row in self.data)

    def transpose(self):
        transpose_matrix = [[0 for j in range(self.n)] for i in range(self.m)]
        for i in range(self.n):
            for j in range(self.m):
                transpose_matrix[j][i] = self.data[i][j]
        return transpose_matrix

    @classmethod
    def fromdict(cls, datadict: dict, rows: int, cols: int):
        matrix = [[0 for _ in range(cols)] for _ in range(rows)]

        for key, value in datadict.items():
            i = int(key.split("_")[1])
            j = int(key.split("_")[2])
            matrix[i][j] = float(value)
        return cls(data=matrix)
