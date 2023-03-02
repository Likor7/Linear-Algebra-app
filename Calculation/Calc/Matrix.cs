namespace Calc;

public class Matrix
{
    public double[,] Data;

    public int N { get; }

    public int M { get; }

    public Matrix(int n, int m)
    {
        N = n;
        M = m;
        Data = new double[n, m];
    }

    public Matrix(double[,] data)
    {
        Data = data;
        N = data.GetLength(0);
        M = data.GetLength(1);
    }

    public double this[int i, int j]
    {
        get => Data[i, j];
        set => Data[i, j] = value;
    }

    public static Matrix operator +(Matrix a, Matrix b)
    {
        if (a.N != b.N || a.M != b.M)
        {
            throw new ArgumentException("Matrices must be of the same size");
        }

        var result = new Matrix(a.N, a.M);
        for (var i = 0; i < result.N; i++)
        {
            for (var j = 0; j < result.M; j++)
            {
                result[i, j] = a[i, j] + b[i, j];
            }
        }
        return result;
    }

    public static Matrix operator -(Matrix a, Matrix b)
    {
        if (a.N != b.N || a.M != b.M)
        {
            throw new ArgumentException("Matrices must be of the same size");
        }

        var result = new Matrix(a.N, a.M);
        for (var i = 0; i < result.N; i++)
        {
            for (var j = 0; j < result.M; j++)
            {
                result[i, j] = a[i, j] - b[i, j];
            }
        }
        return result;
    }

    public static Matrix operator *(Matrix a, Matrix b)
    {
        if (a.M != b.N)
        {
            throw new ArgumentException("Matrices are not compatible for multiplication");
        }

        var result = new Matrix(a.N, b.M);
        for (var i = 0; i < result.N; i++)
        {
            for (var j = 0; j < result.M; j++)
            {
                double sum = 0;
                for (var k = 0; k < a.M; k++)
                {
                    sum += a[i, k] * b[k, j];
                }
                result[i, j] = sum;
            }
        }
        return result;
    }
    
    public double EuclideanNorm()
    {
        double sum = 0;
        for (var i = 0; i < N; i++)
        {
            for (var j = 0; j < M; j++)
            {
                sum += Data[i, j] * Data[i, j];
            }
        }
        return Math.Sqrt(sum);
    }
}