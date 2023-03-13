//Sintaxis
// if (true) {
//     console.log("Mensaje verdadero");
// }

// if (false) {
//     console.log("Mensaje falso");
// }

// let numero = 5;

// if (numero == 5) {
//     console.log("Mensaje verdadero");
// }

// if (numero == 6) {
//     console.log("Mensaje falso");
// }

// let adinum = prompt("Este es un juego para dos personas\n " + "La primera ingresa un numero del 1 al 10\n " + "La segunda lo adivina\n" + " Igresa un numero");
// console.log(adinum)
// que estoy validando?

let adinum;

function validarAdinum() {
    adinum = prompt("Este es un juego para dos personas\n " + "La primera ingresa un numero del 1 al 10\n " + "La segunda lo adivina\n" + " Igresa un numero");
    if (adinum < 1 || adinum > 10) {
        alert("El numero debe ser entre 1 y 10");
        validarAdinum()
    }
    return
}
validarAdinum()

let adivina;
function validarAdivina() {
    adivina = prompt("Adivina el numero del 1 al 10 que ingreso tu amigo\n" + "Vamos a ver si es Correcto o incorrecto");
    if (adivina < 1 || adivina > 10) {
        alert("El numero debe ser entre 1 y 10");
        validarAdivina()
    }
    return
}
validarAdivina()

if (adivina == adinum) {
    alert("CORRECTO SI ADIVINASTE");
} else if (adivina !== adinum) {
    alert("INCORRECTO NO ADIVINASTE");
}

