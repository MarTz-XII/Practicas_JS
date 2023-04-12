const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Crear la nieve
const snowflakes = [];
for (let i = 0; i < 100; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 5 + 2;
    const speed = Math.random() * 2 + 1;
    snowflakes.push({ x, y, size, speed });
}

// Dibujar el paisaje nevado
function draw() {
    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar la nieve
    ctx.fillStyle = "white";
    for (const snowflake of snowflakes) {
        snowflake.y += snowflake.speed;
        if (snowflake.y > canvas.height) {
            snowflake.y = -snowflake.size;
        }
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Dibujar el suelo nevado
    ctx.fillStyle = "#eee";
    ctx.fillRect(0, canvas.height - 50, canvas.width, 50);

    // Dibujar los árboles
    ctx.fillStyle = "#964B00";
    ctx.beginPath();
    ctx.moveTo(100, canvas.height - 50);
    ctx.lineTo(150, canvas.height - 200);
    ctx.lineTo(200, canvas.height - 50);
    ctx.fill();

    ctx.fillStyle = "#964B00";
    ctx.beginPath();
    ctx.moveTo(500, canvas.height - 50);
    ctx.lineTo(550, canvas.height - 150);
    ctx.lineTo(600, canvas.height - 50);
    ctx.fill();
}

// Actualizar el paisaje nevado cada 30 milisegundos
setInterval(draw, 30);