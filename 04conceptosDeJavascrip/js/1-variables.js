//Esto es un comentario de una línea.

/*
Es un comentario de múltiples líneas.
*/

// crear o declarar una variable (var (ya no se usa, no se considera una practica correcta) - lent - cons)
// variable: es un espacio de memoria que almacena un dato.
//let: es una variable la cual se puede cambiar.
//cons: crea una constante el valor de esta variable no se va a poder cambiar. 
// A la hora de crear una variable debemos ponerle nombres intuitivos con la información que queremos guardar.

let producto = "ipad pro";
let precio = 700 ;
let luzEncendida = false;

// como esta compuesta nuestra variable por let nombreDeLaVariable = valor que tiene almacenado, se debe colocar entre "" o ''.
// la variable puede ser un texto, un número o una operación booleana.
// como buena práctica se debe colocar al final de cada línea de código un (;) si este no se coloca el codigo no se va a romper pero el no colocarlo se considera una mala práctica.

//Formas de mostrar.
// mostrar en el documento HTML.
/* para ello se usa document.write("lo que queremos colocar"), si lo que queremos mostrar es una variable dentro del parentésis debemos colocar el nombre
de la variable no es necesario que coloquemos las"", también se puede realizar operaciones matemáticas dentro del paréntesis obteniendo el resultado.*/

document.write("Hola mundo");
document.write("<br>");
document.write(precio);
document.write("<br>");
document.write(precio*380);

//Si deseamos realizar un salto de línea dentro del parentesis debemos colocarlo de la siguiente manera y esto nos va a provocar un salto de línea document.write("<br>").

//mostrar en la consola.
/* para mostrarlo en la consola tenemos que usar console.log() y dentro del paréntesis al igual que el caso anterior colocar o las "" si es un texto que
queremos escribir o sin comillas si es una variable, también se puede realizar operaciones matemáticas dentro del paréntesis obteniendo el resultado.*/

console.log("Hola mundo");
console.log(precio);
console.log(precio*380);
