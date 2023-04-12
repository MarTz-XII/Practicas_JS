const heading = document.getElementById('heading');
const changeStyleBtn = document.getElementById('change-style-btn');

// Arreglo con diferentes estilos para el encabezado
const styles = [
    {
        color: 'red',
        fontFamily: 'Helvetica, sans-serif'
    },
    {
        color: 'blue',
        fontFamily: 'Georgia, serif'
    },
    {
        color: 'green',
        fontFamily: 'Arial, sans-serif'
    }
];

// Función que cambia el estilo del encabezado
function changeStyle() {
    const currentStyle = styles.shift();
    styles.push(currentStyle);
    heading.style.color = currentStyle.color;
    heading.style.fontFamily = currentStyle.fontFamily;
}

// Agregar evento clic al botón
changeStyleBtn.addEventListener('click', changeStyle);
