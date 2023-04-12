function getSign() {
    const dateInput = document.getElementById("date").value;
    const date = new Date(dateInput);
    const month = date.getMonth() + 1;
    const day = date.getDate();



    let sign;
    let color = 0;
    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
        color = 1;
        sign = "Capricornio";
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 19)) {
        color = 2;
        sign = "Acuario";
    } else if ((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
        color = 3;
        sign = "Piscis";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        color = 4;
        sign = "Aries";
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 21)) {
        color = 5;
        sign = "Tauro";
    } else if ((month == 5 && day >= 22) || (month == 6 && day <= 21)) {
        color = 6;
        sign = "Géminis";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        color = 7;
        sign = "Cáncer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        color = 8;
        sign = "Leo";
    } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        color = 9;
        sign = "Virgo";
    } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        color = 10;
        sign = "Libra";
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        color = 11;
        sign = "Escorpio";
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        color = 12;
        sign = "Sagitario";
    }
    const numeroSuerte = Math.floor(Math.random() * 100) + 1;
    cambiarColor(color);
    document.getElementById("result").innerHTML = `Tu signo zodiacal es ${sign} y tu numero de la suerte es ${numeroSuerte}.`;
}
function cambiarColor(color) {
    const colores = [
        "#FF4E4E", // Aries
        "#FFA500", // Tauro
        "#8B0000", // Géminis
        "#008000", // Cáncer
        "#FFFF00", // Leo
        "#00CED1", // Virgo
        "#9400D3", // Libra
        "#FF69B4", // Escorpio
        "#1E90FF", // Sagitario
        "#FF8C00", // Capricornio
        "#FF1493", // Acuario
        "#800080"  // Piscis
    ];
    const miDiv = document.getElementById("miDiv");
    miDiv.style.backgroundColor = colores[color];
}
