//ejercicio 1

let num1=4;
let num2=5;



//ejercicio 2
if(num1 > num2){

  console.log( num1);
}else if(num1 < num2){
  console.log(num2)
}else{
  console.log(`Los números son iguales`)
}



//ejercicio 3

if (num1 === num2) {
  console.log(`Los numeros son iguales`);
} else {
  console.log(`Los numeros son diferentes`);
}


//ejercicio 4
let date1 = "2018-9-2";
let date2 = "2023-7-5";

if (date1 > date2) {
  console.log(`La fecha ${date1} es mayor que la fecha ${date2}`);
} else if (date2 > date1) {
  console.log(`La fecha ${date2} es mayor que la fecha ${date1}`);
} else {
  console.log("Las fechas son iguales");
}


//ejercicio 5

let number1 = 5;
let number2 = 7;
let number3 = 9;

if (number1 > number2 && number1 > number3) {
  console.log(`El número ${number1} es el mayor`);
} else if (number2 > number1 && number2 > number3) {
  console.log(`El número ${number2} es el mayor`);
} else {
  console.log(`El número ${number3} es el mayor`);
}


//ejercicio 6

let colorName =prompt('Escoge entre verde, rojo y azul');


let color = colorName;

switch (color) {
  case "rojo":
    console.log("El color de la pasión");
    break;
  case "azul":
    console.log("El color del mar");
    break;
  case "verde":
    console.log("El color de la naturaleza");
    break;
  default:
    console.log("Color no válido");
}


//ejercicio 7

let num_1 = Number(prompt('Ingrese un numero entre el 1 y el 100'));
let num_2 = Number(prompt('Ingrese otro un numero entre el 1 y el 100'));
let operation = prompt("indica si quieres hacer una suma, resta, multiplicación, división")

  let add = num_1 + num_2;
  let sub = num_1 - num_2;
  let mult = num_1 * num_2;
  let div = num_1 / num_2;

  switch (operation) {
    case "suma":
      console.log(`La suma de ${num_1} y ${num_2} es ${add}`);
      break;
    case "resta":
      console.log(`La resta de ${num_1} y ${num_2} es ${sub}`);
      break;
    case "multiplicación":
      console.log(`El producto de ${num_1} y ${num_2} es ${mult}`);
      break;
    case "división":
      console.log(`La división entre ${num_1} y ${num_2} es ${div}`);
      break;
    default:
      console.log("Operación incorrecta");
  }

  
//ejercicio 8

let nombre1=prompt("indique el nombre de la primer persona");
let edad1=parseInt(prompt("indique la edad"));
let altura1=parseFloat(prompt("indique la altura en metros"));

let nombre2=prompt("indique el nombre de la segunda persona");
let edad2=parseInt(prompt("indique la edad"));
let altura2=parseFloat(prompt("indique la altura en metros"));

let persona1 = {
  nombre: nombre1,
  edad: edad1,
  altura: altura1
};

let persona2 = {
  nombre: nombre2,
  edad: edad2,
  altura: altura2
};
    if(persona1.altura > persona2.altura){
      console.log(`${persona1.nombre} es mas alta que ${persona2.nombre}`);
    }else{
          console.log(`${persona2.nombre} es mas alta que ${persona1.nombre}`)
        }
     
     if(persona1.edad > persona2.edad){
      console.log(`${persona1.nombre} es mayor que ${persona2.nombre}`);
    }else{
          console.log(`${persona2.nombre} es mayor que ${persona1.nombre}`)
         }



//ejercicio 9

  let nombre=prompt("indique su nombre");
  let edad=parseInt(prompt("indique su edad"));
  let altura=parseInt(prompt("indique su altura en centimetros"));
  let vision=parseInt(prompt("indique su nivel de visión"));

  if( edad >= 18 && altura >= 110 && vision >= 8){

    console.log(`Estás calificado para conducir`);

  }
  else{
    console.log("lo siento, debes de ser mayor de edad, medir mas de 100cm y tener una visión minima de 8/10")
  }




//ejercicio 10  

let yourage=parseInt(prompt("indica tu edad"));
if(yourage <= 12){
  console.log("eres un infante");

}else if(yourage >= 13 && yourage <= 18){
  console.log("eres un adolecente");
}else if(yourage >= 19 && yourage <= 45){
  console.log("eres un adulto joven");
}else if(yourage >= 46 && yourage <= 99){
  console.log("hacer parte de la tercera edad");
}else{
  console.log("¿Realmente eres viejo?")
}




//ejercicio 11

let numrang = parseInt(prompt("Ingrese un número entre el 1 y el 3"));

switch (numrang) {
  case 1: 
    console.log(`El número ingresado es ${numrang}`);
    break;

  case 2:
    console.log(`El doble del número es ${numrang * 2}`);  
    break;
  
  case 3:
    console.log(`El triple del número es ${numrang * 3}`);
    break;  

  default:
    alert("Ese valor no está permitido"); 
}



//ejercicio 12

let nClient=prompt('Ingrese su nombre');

const clientR=['Juan', 'Carlos', 'Andres', 'Luis'];

let pass;

if(!clientR.includes(nClient)){

  let clientType=prompt('¿Eres usuario VIP o Normal?')

  if(clientType == 'VIP'){
  clientR.push(nClient);
  alert(`Es un placer ${nClient} Ahora eres usuario VIP`);


  }else{
    alert('no eres usuario VIP')
    let Ticket = confirm('Quieres comprar el ticket')

  if(Ticket == true )
     {
      let valor=parseInt(prompt('Ingresa el monto a donar "donativos superiores a 1000"'))
      if(valor >= 1000){
        alert(`Bienvenido ${nClient} ahora eres usuario VIP`)
      }else{
      alert('El donativo es inferior a 1000, lo siento, no puedes ser usuario VIP')
        }
     }
  }

} else{
  alert(`Bienvenido ${nClient}`)}
  


