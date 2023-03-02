const generateRandom = (event) => {
    event.preventDefault();
    const inputs = document.querySelectorAll("#form-inputs input");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].removeAttribute("required");
    }
  
    const min = 0.0;
    const max = 10.0;

    for (let i = 0; i < inputs.length; i++) {
        const randomNum = Math.random() * (max - min) + min;

        const roundedNum = Math.round(randomNum * 100) / 100;

        inputs[i].value = roundedNum;
    }

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].setAttribute("required", "");
    }
  }