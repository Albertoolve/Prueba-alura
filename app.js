/*let parrafo = document.querySelector('p'); // p y h1 son objetos
parrafo.innerHTML = 'Indica un numero del 1 a 10'; //de uno  en uno
*/
let numerosecreto = 0; //variable global
let contadordeintentos = 0;
let numeromaximo = 10;
let listadenumerossorteados = []; // arreglo vacio
function insertartextoelemento(elemento,texto){ // por general para cualquier objeto
    elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function VerificarUsuario() { //es el encapasulamiento de una accion a hacer
let numeroUsuario = parseInt(document.getElementById('ValorUsuario').value); //solo un numero
/*console.log(numeroUsuario);
console.log(typeof(numeroUsuario)); //para erificar el tipo de dato
console.log(numerosecreto);
console.log(numeroUsuario === numerosecreto); //hace la comparcion y va saltar un true o false
*/
if(numeroUsuario === numerosecreto){
    insertartextoelemento('p',`Acertaste el numero en ${contadordeintentos} ${(contadordeintentos ===1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
} else{
     if(numeroUsuario > numerosecreto){
     insertartextoelemento('p','El numero es menor');
    }
      else{
     insertartextoelemento('p','El numero es mayor');
    }
    contadordeintentos ++;
    limpiarcaja();
}
return;
//=== es para comparar y deben ser el mismo tipo de dato y de igual valor para que salga true
}

function limpiarcaja() {
  document.querySelector('#ValorUsuario').value = ''; // la forma mas corta
  /* de la fórma larga
  let valorcaja = document.querySelector('#ValorUsuario');
  valorcaja.value = '';*/
}

function generarnumerosecreto() {

   let numerogenerado = Math.floor(Math.random()*numeromaximo)+1; // esta es una forma

   console.log(numerogenerado);
   console.log(listadenumerossorteados);
  if(listadenumerossorteados.length == numeromaximo){
    insertartextoelemento('p','Ya acabaron los numeros aleatorios');
    //si ya se hicieron todos los intentos
  }else{
    if(listadenumerossorteados.includes(numerogenerado)){
    return generarnumerosecreto();
    } 
    else{
    listadenumerossorteados.push(numerogenerado); //agrega el numero a la lista
    return numerogenerado;
   }
 }
}

function condicionesiniciales() {
  insertartextoelemento('h1','Juego del numero secreto');
  insertartextoelemento('p',`Indica un numero del 1 a ${numeromaximo}`);
  numerosecreto = generarnumerosecreto();
  contadordeintentos = 1;
}

function reiniciarjuego(){
  limpiarcaja();
  condicionesiniciales();
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesiniciales();

/*
Arreglos 
Todos los arreglos inician con posicion cero

*/
/*/<button onclick="mostarAlerta()" class="button">Alert</button> es la estructura para un boton
function mostarAlerta(){
    alert("AMO JS");
} */

/*
Desafios 2
1)
function mostrarHola() {
  console.log("¡Hola, mundo!");
}
mostrarHola();

2)
function mostrarHolaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}
mostrarHolaNombre("Alice");

3)
function calcularDoble(numero) {
  return numero * 2;
}
let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);

4)
function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;
}
let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);

5)
function encontrarMayor(a, b) {
  return a > b ? a : b;
}
let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);

6)
function cuadrado(numero) {
  return numero * numero;
}
let resultado = cuadrado(2);
console.log(resultado);
*/

/*
desafios 3

1)
function calcularIMC(altura, peso) {
  var imc = peso / (altura * altura);
  return imc;
}

2)
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

3)
function convertirDolaresAReales(dolares) {
  var cotizacionDolar = 4.80;
  var reales = dolares * cotizacionDolar;
  return reales;
}
// Ejemplo de uso
let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);

4)
function calcularAreaYPerimetroRectangular(altura, anchura) {
  var area = altura * anchura;
  var perimetro = 2 * (altura + anchura);
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let altura = 3; // en metros
let anchura = 5; // en metros
calcularAreaYPerimetroRectangular(altura, anchura);

5)
function calcularAreaYPerimetroCircular(radio) {
  var pi = 3.14;
  var area = pi * radio * radio;
  var perimetro = 2 * pi * radio;
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let radio = 4; // en metros
calcularAreaYPerimetroCircular(radio);

6)
function mostrarTablaDeMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
// Ejemplo de uso
let numero = 7;
mostrarTablaDeMultiplicar(numero);
*/

/*
Desafios 4
1)
let listaGenerica = []; 

2)
let lenguajesdeprogramacion = ["python","c","c++","javascript","kotlin"];

3)

let lenguajesdeprogramacion = ["python","c","c++","javascript","kotlin"];
lenguajesdeprogramacion.push("java","ruby","Golang");

4 y 5)
function todosloselementos(){ muestra los elmento de forma inversa
    for (let i = lenguajesdeprogramacion.length -1;i >= 0; i--) {
      console.log(lenguajesdeprogramacion[i]);
    }
  
}
todosloselementos();

6)
function calcularMedia(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log('Média:', media);

7)
function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}

let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);

8)
function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

let numeros = [15, 8, 25, 5, 12];
let suma = calcularSuma(numeros);
console.log('Suma:', suma);

9)
function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}
*/