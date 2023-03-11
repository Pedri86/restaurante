// var numero1;
// numero1 = 12;

// var numero2 = 3;
// var numero3 = "45";
// var palabra = 'hola "mundo"';
// var logica = false;
// var decimales = 5.5;

// var objeto = {"nombre":"Pedro","apellido":"Duarte"};
// var lista2 = [1,2,3,4,5,6,7];
// var lista = ["pedro",numero2,logica,"mundo",lista2,objeto];



// console.log(numero2);
// console.log(numero3);

// console.log(lista);
// console.log(lista[4][6]);

// console.log(objeto);

// var cadena = "Hola,mundo";
// console.log(cadena.length);
// console.log(cadena.charAt(5));
// // console.log(cadena.charAt(cadena.length - 1));
// console.log(cadena.indexOf("o"));
// console.log(cadena.lastIndexOf("u"));
// console.log(cadena.replace("Hola","Hi"));
// console.log(cadena.search("Hola"));
// console.log(cadena.split(","));
// console.log(cadena.substr(0,3));
// console.log(cadena.substring(0,4));
// console.log(cadena.toLowerCase(0,4));
// console.log(cadena.toUpperCase(0,4));
// console.log(cadena.trim());
// console.log(cadena.concat(" ","alonso"," ","perez"));

// cadena = cadena + " " + "alonso" + " " + "perez";
// console.log(cadena);

// console.log(numero2.toString());
// console.log(numero2 +" ");

        // Operadores aritmeticas y de comparación

// var total = numero1 + numero2;
// console.log(total);

// var total = numero1 - numero2;
// console.log(total);

// var total = numero1 * numero2;
// console.log(total);

// var total = numero1 / numero2;
// console.log(total);

// var total = 15 % numero2;
// console.log(total);

// console.log(Math.pow(2,3));
// console.log(Math.sqrt(81));

// console.log(numero1 > numero2);
// console.log(numero1 >= 12);
// console.log(numero1 < numero2);
// console.log(3 <= numero2);
// console.log(numero1 == numero2);
// console.log(numero1 != numero2);
// console.log(numero1 === "12");


// var hola;
// function sumar(n1,n2)
// {
//     // console.log(n1 + n2);
//     hola = n1 + n2;
// }

// function restar(n1 = 0,n2 = 0)
// {
//     return n1 - n2;
// }

// sumar(10,2);
// console.log(hola);

// var total = restar(9,4)
// console.log(total);


// alert("hola");

// var respuesta = confirm("¿Deseas salir de la página?");

// console.log(respuesta);

// var rpta1 = prompt("ingrese numero 1");
// var rpta2 = prompt("ingrese numero 2");


// console.log(parseFloat(rpta1) + parseFloat(rpta2));

// setTimeout(function(){
//     alert("holaa");
// },1000);

// setInterval(function(){
//      console.log(new Date());
//  },1000);

// var numero = prompt("Ingresa un numero");

//     if ((numero > 0) && (numero < 10))
//     {
//         alert("Eres menor de edad");
//     }else if(numero == 10){
//         alert("Tienes 10 años");
//     }else if((numero > 10) && (numero < 18)){
//         alert("sigues siendo menor");
//     }else{
//         alert("Eres mayor de edad");
//     }

// var numero = prompt("Ingresa un numero");
// numero = parseInt(numero);
// switch (numero)
// {
//     case 0:
//         alert("recien naciste");
//         break;
//     case 18:
//         alert("recien mayor");
//         break;
//     case 50:
//         alert("eres de tercera edad");
//         break;
//     default:
//         alert("tienes otra edad");

// }

// var semana = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

// var nombre = "Pedro";

// for (var i = 0; i < semana.length; i++) {
//     console.log(semana[i]);
// }

// for (var i = semana.length - 1; i >= 0 ; i--) {
//     console.log(semana[i]);
// }

// for (var i = 0; i < nombre.length; i++) {
//     console.log(nombre.charAt(i));
// }

// var cocinero1 = document.getElementById("cocinero1");

// // alert(cocinero1.innerHTML);
// cocinero1.innerHTML = "Pedro Duarte";
// cocinero1.className = "clase clase2";
// cocinero1.id = "avion";

//  var titulos = document.getElementsByTagName("h2");

// for (var i = 0; i < titulos.length; i++) {
//     titulos[i].id = "cocinero"+i;
// }

// var columnas = document.getElementsByClassName("columna");

// console.log(columnas);

// for (var i = 0; i < titulos.length; i++) {
//     titulos[i].id = "columna"+i;
// }

// var enlaces = document.querySelectorAll("header nav a");

// console.log(enlaces);

// for (var i = 0; i < enlaces.length; i++) {
//     enlaces[i].id = "enlaces"+i;
// }


// var enlace = document.querySelector("header nav a");

// enlace.className = "soy_el_primero";

// var cocinero1 = document.getElementById("cocinero1");

// // cocinero1.onclick = function(){
// //     alert("soyelcocinero pepito");
// // } 

// cocinero1.onclick = function(){
//     alert("soyelcocinero pepito");
// } 

// cocinero1.addEventListener("click",function(){
//     alert("Soy el cocinero Pepito II");
// })