
let a = 77;
let entrada = prompt("Vamos a multiplicar un numero por 77\n" + "\nIngresa un numero\n");
let resultado = a * entrada;
let salida = "El resultado de 77 por\n" + entrada + " " + "es\n" + resultado;
alert(salida)

let b = "Curso JavaScrit";
let entrada2 = prompt("Bienvenido a CoderHouse\n" + "\nIngresa tu Nombre\n");
let resultado2 = b + " " + entrada2;
let salida2 = "Te damos la Bienvenida al\n"  + resultado2;
alert(salida2)

let numero1 = prompt("Vamos a multiplicar dos numeros\n" + "\nIngresa el Primer numero\n");
let numero2 = prompt("Ingresa el Segundo numero\n")
let operacion = numero1 * numero2;
let salidaOperacion = "El resultado de\n" + numero1 + "\npor\n" + numero2 + "\nes\n" + operacion;
alert(salidaOperacion)

let sum1 = prompt("Vamos a sumar dos numeros\n" + "\nIngresa el Primer numero\n");
let sum2 = prompt("Ingresa el Segundo numero\n");
let uno = parseInt(sum1);
let dos = parseInt(sum2);
let suma = uno + dos;
let salidaSuma = "El resultado de\n" + sum1 + "\nmas\n" + sum2 + "\nes\n" + suma;
alert(salidaSuma);

let rest1 = prompt("Vamos a restar dos numeros\n" + "\nIngresa el Primer numero\n");
let rest2 = prompt("Ingresa el Segundo numero\n")
let resta = rest1 - rest2;
let salidaResta = "El resultado de\n" + rest1 + "\nmenos\n" + rest2 + "\nes\n" + resta;
alert(salidaResta)

let div1 = prompt("Vamos a dividir dos numeros\n" + "\nIngresa el Primer numero\n");
let div2 = prompt("Ingresa el Segundo numero\n")
let division = div1 / div2;
let salidaDivision = "El resultado de\n" + div1 + "\nentre\n" + div2 + "\nes\n" + division;
alert(salidaDivision)

let porc1 = prompt("Vamos buscar el porcentaje de un numero\n" + "\nIngresa el numero\n");
let porc2 = prompt("Ingresa el porcentaje %\n")
let porcentaje = porc1 * porc2 / 100;
let salidaPorcentaje = "El " + porc2 + "%" + " de " + porc1 + " es " + porcentaje;
alert(salidaPorcentaje)