//ejercicio 1



let numero1 = parseInt(prompt(`Ingrese un número entre 1 y 100:`));


if (numero1 >= 1 && numero1 <= 100) {
  for (let i = numero1; i >= 0; i--) {
    console.log(i);
  }
} else {
  alert(`El número ingresado está fuera del rango válido (1 a 100).`);
}

// ejercicio 2

let numero2 = parseInt(prompt(`Ingrese un número entre 1 y 10 para generar su tabla de multiplicar:`));


if (numero2 >= 1 && numero2 <= 10) {
  console.log(`Tabla de multiplicar del número ${numero2}:`);
  for (let i = 1; i <= 10; i++) {
    let resultado = numero2 * i;
    console.log(`${numero2} x ${i} = ${resultado}`);
  }
} else {
  alert(`El número ingresado está fuera del rango válido (1 a 10).`);
}


// ejercicio 3

let suma1 = 0;
let numero3 = parseInt(prompt(`Ingrese un número (0 para finalizar):`));

while (numero3 !== 0 && !isNaN(numero3)) {
  suma1 += numero3;
  numero3 = parseInt(prompt(`Ingrese otro número (0 para finalizar):`));
}

console.log(`La suma de los números ingresados es: ${suma1}`);



// ejercicio 4

let suma2 = 0;
let numero4;

do {
  numero4 = parseInt(prompt(`Ingrese un número (0 para finalizar):`));
  if (!isNaN(numero4)) {
    suma2 += numero4;
  }
} while (numero4 !== 0);

console.log(`La suma de los números ingresados es: ${suma2}`);



// ejercicio 5

let persona = {
  nombre: 'Ricardo',
  apellido: 'Díaz',
  origen: 'Colombia',
  estudios: 'Universitarios',
  edad: 30
};

for (let objeto in persona) {
  console.log(objeto);
}




// ejercicio 6

let numeroSecreto = 10; 
let intentos = 0;
let intentoUsuario;

do {
  intentoUsuario = parseInt(prompt(`Intenta adivinar el número secreto:`));

  if (intentoUsuario > numeroSecreto) {
    console.log(`El número ingresado es mayor que el secreto.`);
  } else if (intentoUsuario < numeroSecreto) {
    console.log(`El número ingresado es menor que el secreto.`);
  }

  intentos++;
} while (intentoUsuario !== numeroSecreto);

alert(`¡Has acertado! El número secreto era ${numeroSecreto} y has hecho ${intentos} intentos.`);



// ejercicio 7

let numero5 = parseInt(prompt("Ingrese un número para encontrar sus divisores:"));
let divisores = [];

for (let i = 1; i <= numero5; i++) {
  if (numero5 % i === 0) {
    divisores.push(i);
  }
}

console.log(`Los divisores de ${numero5} son: ${divisores}`);




// ejercicio 8

function Campana() {
  console.log("Ding Dong");
  return "Ding Dong";
}

let veces = parseInt(prompt("Ingrese un número:"));
let resultado = "";

for (let i = 0; i < veces; i++) {
  resultado =resultado + Campana();
  if (i !== veces - 1) {
    resultado = resultado + ", ";
  }
}

console.log(resultado);



// ejercicio 9

const dateLimit = "1997-08-03";
const fechas = ["1984-02-18", "1998-02-03", "1973-07-15", "2024-10-31", "2081-09-01"];

for (let fecha of fechas) {
  if (fecha >= dateLimit) {
    console.log(fecha);
  }
}

// ejercicio 10

let colores = ["Rojo", "Verde", "Azul", "Violeta", "Marrón", "Negro", "Blanco"];

for (let color of colores) {
  console.log(color);
}



// ejercicio 11

function otrosColores(colores) {
  for (let color of colores) {
    console.log(color);
  }
}



// ejercicio 12

let numeros1 = [5, 7, 1, 3, 50];

for (let numero6 of numeros1) {
  let doble = numero6 * 2;
  console.log(`el número es ${numero6} y su doble es ${doble}`);
}



// ejercicio 13

let familia = [
  { nombre: 'María', apellido: 'López', edad: 40, miembro: 'madre' },
  { nombre: 'Juan', apellido: 'Pérez', edad: 38, miembro: 'padre' },
  { nombre: 'Romina', apellido: 'Pérez', edad: 13, miembro: 'hija' },
  { nombre: 'Tomás', apellido: 'Pérez', edad: 10, miembro: 'hijo' }
];

function presentarFamilia(array) {
  for (let miembro of array) {
    console.log(`Hola, soy ${miembro.nombre} ${miembro.apellido} (${miembro.miembro}) y tengo ${miembro.edad} años.`);
  }
}

presentarFamilia(familia);




// ejercicio 14

let numero7;
let sumaPares = 0;
let sumaImpares = 0;

do {
  numero7 = parseInt(prompt("Ingrese un número (0 para finalizar):"));

  if (numero7 !== 0) {
    if (numero7 % 2 === 0) {
      sumaPares += numero7;
    } else {
      sumaImpares += numero7;
    }
  }
} while (numero7 !== 0);

console.log(`Suma de números pares: ${sumaPares}`);
console.log(`Suma de números impares: ${sumaImpares}`);



// ejercicio 15

let numeros2 = [15, 3, 27, 8, 42, 10, 5, 38, 20, 12];
let numeroMasGrande = numeros2[0];

for (let i = 1; i < numeros2.length; i++) {
  if (numeros2[i] > numeroMasGrande) {
    numeroMasGrande = numeros2[i];
  }
}

console.log(`El número más grande es: ${numeroMasGrande}`);











