namespace Calc;

public class SoLAE
{
    public Matrix A { get; set; }
    public Vector x { get; }
    public Vector b { get; }

    public SoLAE(Matrix a, Vector x, Vector b)
    {
        A = a;
        this.x = x;
        this.b = b;
    }
}