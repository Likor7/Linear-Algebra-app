using Newtonsoft.Json;

namespace Calc;

static class Program
{
    public static void Main(string[] args)
    {
        var type = args[0];
        if (type == "matrix")
        {
            var calcType = args[1];
            switch (calcType)
            {
                case "norms":
                    break;
                case "multiplication":
                    break;
                case "addition":
                    break;
                case "subtraction":
                    break;
            }
        }
        else
        {
            
        }
        // var matrixJson = args[0];
        // var vectorJson = args[1];
        // var matrix = new Matrix(JsonConvert.DeserializeObject<double[,]>(matrixJson));
        // var vector =  new Vector(JsonConvert.DeserializeObject<double[]>(vectorJson));
        // var resultJson = JsonConvert.SerializeObject((matrix * matrix).Data);
        //Console.Write(resultJson);
    }
}
