      /*Palabras reservadas break, case, catch, continue, defaul, let, delete, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with, ...*/
      
      var nomb = "Elia"; //ES5 version ya no se utiliza pq puede duplicar variables

      let apellido = "Hernandez"; //ES6 version no duplica variables
//Declaracion de variable
      let numero;
      //asignacion de valor
      numero = 12;
      //reasignacion de valores
      numero = 34;
      //Una variable constante no cambia en todo el codigo
      const PI = 3.14159;
      //las variables deben ser descriptivas en sus nombres para identificarlas rapidamente

      let alumno;
      let profesor;
      let curso;
      let grupo;
      alumno = "Elia";
      profesor = "Daniel";
      curso = "JS";
      //Para concatenar utilizamos + concatenar unir variables
      grupo = alumno + " " + profesor + " " + curso;

//Metodos dse salida
      console.log(grupo);


      
      let nombre = prompt("Ingrese su nombre")
      alert("Hola")
      let entrada = prompt("Ingresa un numero");
      let salida = "numero" + entrada + " " + "ingresado";
      alert(salida)

      let a = 6;
      let b = 23;
      let resultado = a + b;
      document.write("La suma de\n"+ a + "\n+\n" + b + "\nes\n" + resultado);
