namespace Calc;

public class Vector
{
    public double[] Data;
    
    public int N { get; }

    public Vector(double[] data)
    {
        Data = data;
        N = Data.GetLength(0);
    }

    public Vector(int n)
    {
        N = n;
        Data = new double[n];
    }
}