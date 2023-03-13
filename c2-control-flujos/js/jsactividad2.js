
//Pedir numero mediante prompt y si es mayor 1000 mostrar un alert
let numero;
function validarNumero() {
numero = prompt("Ingresa un numero \n" + "Ten cuidado que sea menor a 1000");
if (numero <= 1000) {
    alert("El numero ingresado es\n" + numero)
} else if (numero > 1000) {
    alert("El numero es mayor a 1000")
    validarNumero()
}
return
}
validarNumero()

//Pedir un texto mediante prompt y si es igual a Hola mostrar un alert por consola.
let saludo;
saludo = prompt("Escribe la manera mas comun en la que saludas");
if (saludo == "hola" || saludo == "Hola" || saludo == "HOLA") {
    alert("HOLA es un saludo muy utilizado")
    console.log(saludo)
} else if (saludo !== "hola" || saludo !== "Hola" || saludo !== "HOLA") {
    alert(saludo + "\nNo es saludo tan utilizado")
}

//Pedir un numero mediante prompt y evaluar si esta entre 10 y 50.En caso positivo mostrar un alert.
let escribe;
escribe = prompt("Escribe un numero\n" + "Mayor que 10\n" + "Y menor que 50");
let num = parseInt(escribe)
if (num < 10 || num > 50){
    alert(escribe + "\nNo es un numero entre 10 y 50");
}
// } else if (num > 50 ){
//     alert(escribe + "\nNo es un numero entre 10 y 50");
// }
// else if (num >= 10 && num <= 50) {

else {
    alert(escribe + "\nEs un numero entre 10 y 50");
}


//Ejercicio extra
let votar;
let nombre;
nombre = prompt("Vamos a ver si tines edad para votar\n" + "Escribe tu nombre\n");
votar = prompt("Ingresa tu Edad");
if (votar < 18) {
    alert("Lo sentimos\n" + nombre + " No puedes Votar")
} else if (votar >= 18) {
    alert("Felicidades " + nombre + " SI puedes Votar");
}