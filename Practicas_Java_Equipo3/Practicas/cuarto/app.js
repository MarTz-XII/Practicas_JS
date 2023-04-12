var valores = [true, 5, false, "hola", "adios", 2];
alert(valores);
// Cual de los 2 elementos de texto es mayor
// Si el resultado es true, el primer texto es mayor
var resultado = valores[3] > valores[4];
alert(valores[3] + " > " + valores[4]);
alert(resultado);

// Combinar valores booleanos
var valor1 = valores[0];
var valor2 = valores[2];

// Obtener un resultado TRUE
var resultado = valor1 || valor2;
alert(valor1 + " || " + valor2)
alert(resultado);

// Obtener un resultado FALSE
resultado = valor1 && valor2;
alert(valor1 + " && " + valor2);
alert(resultado);

// Operaciones matemáticas
alert('Operaciones matematicas')
var num1 = valores[1];
var num2 = valores[5];

alert('Los numeros son ' + num1 + ' y ' + num2);
var suma = num1 + num2;
alert('suma ' + suma);

var resta = num1 - num2;
alert('resta ' + resta);

var multiplicacion = num1 * num2;
alert('multiplicacion ' + multiplicacion);

var division = num1 / num2;
alert('division ' + division);

var modulo = num1 % num2;
alert('modulo ' + modulo);
