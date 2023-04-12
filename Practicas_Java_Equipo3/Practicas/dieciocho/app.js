function createMultiplicationTable() {
    let number = document.getElementById("number").value;
    let multiplicationList = document.getElementById("multiplicationList");
    multiplicationList.innerHTML = "";
    if (number != "") {
        let li = document.createElement("li");
        li.innerHTML = `<h3>${number}</h3>`;
        for (let j = 1; j <= 10; j++) {
            li.innerHTML += `<p>${number} x ${j} = <input type="text" class="answer" data-correct="${number * j}" /></p>`;
        }
        multiplicationList.appendChild(li);
    }
}

function checkMultiplication() {
    let correct = 0;
    let incorrect = 0;
    let answers = document.getElementsByClassName("answer");
    for (let i = 0; i < answers.length; i++) {
        let answer = answers[i].value;
        let correctAnswer = answers[i].getAttribute("data-correct");
        if (answer == correctAnswer) {
            answers[i].classList.add("correct");
            correct++;
        } else {
            answers[i].classList.add("incorrect");
            incorrect++;
        }
    }
    let result = document.getElementById("result");
    result.innerHTML = `Correct: ${correct} | Incorrect: ${incorrect}`;
}
