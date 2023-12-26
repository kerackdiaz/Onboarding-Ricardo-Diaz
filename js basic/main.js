//ejercicio 1

let myName = "Ricardo";
console.log(myName);

//ejercicio 2

let myLastName = "Diaz";

//ejercicio 3

let myAge = 30;

//ejercicio 4
let myPet = "Jairo";

//ejercicio 5
let petAge = 40;

//ejercicio 6
let fullName = myName + " " + myLastName;

//ejercicio 7
let Presentationtext = "Mi nombre es " + fullName + ", tengo " + myAge + " años. mi gato se llama " + myPet + ", el tiene " + petAge + " años, porque es un humano que se comporta como gato.";
console.log(Presentationtext);



//ejercicio 8
let sumAges = myAge + petAge;
let subtractAges = myAge - petAge;
let productAges = myAge * petAge;
let divisionAges = myAge / petAge;


//ejercicio 9

let student = {
  name: "Ricardo",
  age: 30,
  course: "JavaScript",
  group: "Cohort 53",
  country: "Colombia",
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.group);
console.log(student.country);



//ejercicio 10

let pet = {
  name: "Jairo",
  type: "Cat",
  age: 40,
  breed: "Human",
  color: "cardboard",
};
console.log(pet);
console.log(pet.name);
console.log(pet.type);
console.log(pet.age);
console.log(pet.breed);
console.log(pet.color);


//ejercicio 11

let fruits = ["Manzana", "Naranja", "Banano", "Uvas", "melón"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);


//ejercicio 12

let enteredAge = prompt("Introduzca su edad:");
let IamAdult = enteredAge >= 18;
console.log("Soy mayor de edad: " + IamAdult);



//ejercicio 13

let numbers = [2, 3, 5, 7, 11]; 

console.log(numbers);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);




//ejercicio 14

let family = [
  { name: "Pepe", relation: "Padre" },
  { name: "Flor", relation: "Madre" },
  { name: "Lina", relation: "Hermana" },
  { name: "David", relation: "Hermano" },
  { name: "Jorge", relation: "Abuelo" }
];



console.log(family);
console.log(family[0].name ,family[0].relation)
console.log(family[1].name ,family[1].relation)
console.log(family[2].name ,family[2].relation)
console.log(family[3].name ,family[3].relation)
console.log(family[4].name ,family[4].relation)



//ejercicio 15

let RandomText = `No hay nada mejor que un jugo de  ${fruits[1]} en la mañana, siempre a las  ${numbers[3]} de la mañana, ${family[4].name}, mi abuelo lo preparaba`;
console.log(RandomText);





