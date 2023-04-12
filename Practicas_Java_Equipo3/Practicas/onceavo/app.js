function checkRFC() {
    let inputText = document.getElementById("inputText").value;
    let rfcRegex = /^([A-ZÑ&]{3,4})\d{6}([A-Z\d]{3})?$/i;
    if (rfcRegex.test(inputText)) {
        document.getElementById("result").innerHTML = `El texto "${inputText}" tiene la estructura del RFC!`;
    } else {
        document.getElementById("result").innerHTML = `El texto "${inputText}" no tiene la estrcutura del RFC.`;
    }
}
