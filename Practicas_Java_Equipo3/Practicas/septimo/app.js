function calculate() {
    let inputNumber = document.getElementById("inputNumber").value;
    let factorial = 1;
    for (let i = 2; i <= inputNumber; i++) {
        factorial *= i;
    }
    document.getElementById("result").innerHTML = `The factorial of ${inputNumber} is: ${factorial}`;
}
