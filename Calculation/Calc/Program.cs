using Newtonsoft.Json;

namespace Calc;

static class Program
{
    public static void Main(string[] args)
    {
        var matrixJson = args[0];
        var vectorJson = args[1];
        var matrix = new Matrix(JsonConvert.DeserializeObject<double[,]>(matrixJson));
        var vector =  new Vector(JsonConvert.DeserializeObject<double[]>(vectorJson));
        var resultJson = JsonConvert.SerializeObject((matrix + matrix).Data);
        Console.Write(resultJson);
    }
}
