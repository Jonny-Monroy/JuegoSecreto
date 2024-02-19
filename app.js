let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados=[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroDeUsario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El ususario no acerto
        if(numeroDeUsario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        console.log(intentos);
    }
    return;
}
function limpiarCaja(){
     document.querySelector('#valorUsuario').value = '';
    
}
function generarnumeroSecreto() {
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);
        //si ya sorteamos todos los numero 
        if (listaNumerosSorteados.length == numeroMaximo){
            asignarTextoElemento('p','Ya se sortaron todos los numeros posibles');
        }else{
        //Si el numero generado esta incluido en la lista se hace algo si no se deja como viene
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarnumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    // funcion que encapsula los mensajes de incio
    asignarTextoElemento('h1','Juego del numero secreto!');
    //se hace un template string para poner el numeor maximo que es aleatorio
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo} `);
    //llama el nuemro secreto desde esta funcion
    numeroSecreto = generarnumeroSecreto();
    intentos=1;//
}
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de Intervals de numero
    //Generar el numero aleatorio
    //inicializar el número de intentos
    condicionesIniciales(); 
    //deshabiliatar el boton de nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disable','true');
}

condicionesIniciales(); 


/*
//HORA DE PRACTICAR

//fncion que calcula la masa
function indiceMasa(altura, metros){
    altura = parseFloat(prompt('Ingrese su altura en metros'));
    peso = parseFloat(prompt('Ingrese su peso en Kilos'));
    IMC = (peso/(altura*2));
    alert(`Su masa es ${IMC}`);
}
//funio que calcula un factorial
function factorial(numero){
    if(numero ===0 || numero===1){
        return 1;
    }else {
        return numero*factorial(numero-1);
    }
}

//funcion que cambia divisas

function divisas(){
    var cotizacionDolar = 4.80;
    var reales = dolares * cotizacionDolar;
    return reales;
}
let valorEnDolar = 50;
let valorEnReales = divisas(valorEnDolar);
console.log(`${valorEnDolar} dolares es R$ ${valorEnReales}`);


//Ejerciccios Listas
// crea una lista
let listaGenerica = [];
//crea una lista con variables
let listaDeProgramacion = ['Javascript','C','C++','Kotlin','Python'];
// inserta cositas en un lista
listaDeProgramacion.push('Java', 'Ruby','Golang');

// lee la lista por lenguajes separados
function mostrarlenguajes (){
    for(let i =0; i < listaDeProgramacion.length; i++){
        console.log(listaDeProgramacion[i])
    }
}
mostrarlenguajes();

//lee la lista a la inversa
function listaAlrevez(){
    for(let i = listaDeProgramacion - 1; i >= 0; i--){
        console.log(listaDeProgramacion[i]);
    }
}
mostrarlenguajes();
// funcion qe cacula el promedio de una lista

function promedio(listaDeProgramacion){
    let suma = 0;
    for(let i = 0; i<listaDeProgramacion.length; i++){
        suma +- listaDeProgramacion[i];
    }
}
let numero = [10,20,30,40,50];
let media = promedio(numero);
console.log('Media es : ', media);
 
//funcione que calcula el numeor mayor y menor de una lista
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

  //Crea una función que retorna la suma de todos los elementos en una lista.
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
  
  
//Crea una función que retorna la suma de todos los elementos en una lista.
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

  //Crea una función que recibe una lista como parámetro y retorna el índice de un elemento también pasado como parámetro. Si ese elemento no existe en la lista, retorna -1.
function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }
  */