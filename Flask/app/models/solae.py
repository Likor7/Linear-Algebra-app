from .matrix import Matrix
from .vector import Vector


class SoLAE:
    def __init__(self, A, x, b):
        if A.n != x.n or x.n != b.n:
            raise ValueError("Dimensions of A, x, and b are not compatible.")
        self.A = A
        self.x = x
        self.b = b

    def solve(self):
        # Solve Ax = b using Gaussian elimination with partial pivoting
        n = self.A.n
        A = Matrix(n, n, [row[:] for row in self.A.data])
        x = Vector(n, self.x.data[:])
        b = Vector(n, self.b.data[:])
        for i in range(n):
            # Find row with largest element in current column
            max_row = i
            for j in range(i + 1, n):
                if abs(A.data[j][i]) > abs(A.data[max_row][i]):
                    max_row = j
            # Swap rows i and max_row
            A.data[i], A.data[max_row] = A.data[max_row], A.data[i]
            b.data[i], b.data[max_row] = b.data[max_row], b.data[i]
            # Reduce remaining rows
            for j in range(i + 1, n):
                factor = A.data[j][i] / A.data[i][i]
                for k in range(i + 1, n):
                    A.data[j][k] -= factor * A.data[i][k]
                b.data[j] -= factor * b.data[i]
        # Back-substitution
        for i in range(n - 1, -1, -1):
            for j in range(i + 1, n):
                b.data[i] -= A.data[i][j] * x.data[j]
            x.data[i] = b.data[i] / A.data[i][i]
        return x
