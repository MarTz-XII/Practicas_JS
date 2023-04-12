function checkPalindrome() {
    let inputText = document.getElementById("inputText").value;
    let cleanedText = inputText.toLowerCase().replace(/[\W_]/g, "");
    let reversedText = cleanedText.split("").reverse().join("");
    if (cleanedText === reversedText) {
        document.getElementById("result").innerHTML = `El texto "${inputText}" es un palindromo!`;
    } else {
        document.getElementById("result").innerHTML = `El texto "${inputText}" no es un palindromo.`;
    }
}
