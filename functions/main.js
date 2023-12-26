function agregar(num1, num2) {
  let resultado = num1 * num2;
  return resultado;
}

let number1 = 10;
let number2 = 5;

let resultado = agregar(number1, number2);
console.log(resultado);




//ejercicio 7
let nombre=prompt("Como te llamas")

function saludar(){
  saludo=`Hola ${nombre}`;
  console.log(saludo);
  return;
}

saludar();

//ejercicio 8

function calcular(){
  let valor1= parseInt(prompt('ingrese un numero'));
  let valor2= parseInt(prompt('ingrese otro numero'));
  resultado= valor1*valor2;
  console.log(resultado);
  return;
}

calcular();


//ejercicio 9

function area(){
  let valor1= parseInt(prompt('ingrese el valor de la base '));
  let valor2= parseInt(prompt('ingrese el valor de la altura'));
  resultado=(valor1*valor2)/2;
  console.log(resultado);
  return;
}

area();


//ejercicio 10

function perimetro(){
  let valor1= parseInt(prompt('ingrese el valor del lado 1'));
  let valor2= parseInt(prompt('ingrese el valor del lado 2'));
  let valor3= parseInt(prompt('ingrese el valor del lado 3'));
  resultado=valor1+valor2+valor3;
  console.log(resultado);
  return;
}

perimetro();


//ejercicio 11

function compra(){
  let precio= parseInt(prompt('ingrese el precio'));
  let cant= parseInt(prompt('ingrese la cantidad'));
  const total=precio*cant;
  if(cant >= 10 && cant < 20){

    descuento=total*0.9
    alert(`Se ha aplicado un 10% de descuento a tu compra por  $${total}`);
    alert(`el total de la compra es ${descuento*0.9}`)
  }else if(cant >=20){
    alert(`Se ha aplicado un 20% de descuento a tu compra por  $${total}`);
    alert(`el total de la compra es ${descuento*0.8}`)
  } else{
    alert(`El valor de tu compra es de $${total}`);

  }
  return;
}

compra();


//ejercicio 12

function isAnAdult(){
  let edad=parseInt(prompt("indique su edad"));
  if(edad >= 18){
    alert(`Eres mayor de edad`);

  }else {
    alert(`No eres adulto`);
  }
  return;
}

isAnAdult();


//ejercicio 13

function calcularImpuesto(ingresoAnual) {
let=ingresoAnual=parseInt(prompt(`indique su ingreso salarial anual`))

if (ingresoAnual <= 10000) {
  impuesto = ingresoAnual * 0.1; 
} else if (ingresoAnual > 10000 && ingresoAnual <= 20000) {
  impuesto = ingresoAnual * 0.15; 
} else {
  impuesto = ingresoAnual * 0.2; 
}

alert(`el impuesto a pagar es de $${impuesto}`);
return;
}

calcularImpuesto();


//ejercicio 14

function toDay(){
  let day=parseInt(prompt(`indique el numero del dia siendo lunes 1 y dominto 7`));
 
  if(dia >= 1 && day<= 5){
    alert(`Es un día hábil`);
  }else{
    switch (day) {
      case 6:
        alert(`Es fin de semana`);
        break;
      case 7:
        alert(`Es fin de semana`);
        break;
      default:
        alert("el valor ingresado no es valido");
  }
  return;
}

}
toDay();



//ejercicio 15

function inputValid(datainput) {
  if (datainput.trim() === '') {
    alert(`este campo no puede estar vacío`);
    return false;
  }
  return true;
}

function obtenerDatosPersonales() {
  let datos = {};

  let nombre = prompt(`Ingrese su nombre:`);
  if (!inputValid(nombre)) {
    return;
  }
  datos.nombre = nombre;

  let apellido = prompt(`Ingrese su apellido:`);
  if (!inputValid(apellido)) {
    return;
  }
  datos.apellido = apellido;

  let edad = prompt(`Ingrese su edad:`);
  if (!inputValid(edad) || isNaN(edad)) {
    alert('La edad ingresada no es válida');
    return;
  }
  datos.edad = Number(edad);

  console.log('Datos personales:', datos);
  return datos;
}

obtenerDatosPersonales();


//ejercicio 16
function saludo2(nombre) {
  return `Hola, mi nombre es ${nombre}`;
}

function calcularEdad(nacimiento, aActual) {
  return aActual - nacimiento;
}

function presentacion() {
  let nombre = prompt("Indique su nombre:");
  let nacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
  let aActual = parseInt(prompt("Ingrese el año actual:"));

  let saludoUsuario = saludo2(nombre);
  let edad = calcularEdad(nacimiento, aActual);

  alert(`${saludoUsuario} y tengo ${edad} años`);
}

presentacion();

