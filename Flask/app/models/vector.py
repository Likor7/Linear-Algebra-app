class Vector:
    def __init__(self, n, data=None):
        self.n = n
        self.data = data or [0] * n

    def __add__(self, other):
        if self.n != other.n:
            raise ValueError("Vectors must have the same dimensions.")
        result = Vector(self.n)
        for i in range(self.n):
            result.data[i] = self.data[i] + other.data[i]
        return result

    def __sub__(self, other):
        if self.n != other.n:
            raise ValueError("Vectors must have the same dimensions.")
        result = Vector(self.n)
        for i in range(self.n):
            result.data[i] = self.data[i] - other.data[i]
        return result

    def __mul__(self, other):
        if isinstance(other, (int, float)):
            result = Vector(self.n)
            for i in range(self.n):
                result.data[i] = self.data[i] * other
            return result
        elif isinstance(other, Vector):
            if self.n != other.n:
                raise ValueError(
                    "Vector dimensions are not compatible for dot product."
                )
            dot_product = sum(self.data[i] * other.data[i] for i in range(self.n))
            return dot_product
        else:
            raise TypeError("Can only multiply a vector by a scalar or another vector.")
