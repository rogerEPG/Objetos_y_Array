//1________________
let array = [];

//2_________________
let array2 = ["first", 55, true];

//3________________
3.1
let array3 = [];
array3.push("hola", 40);
array3.unshift(true, undefined);
array3.pop();
array3.shift();
console.log(array3.length);

//3.2
let classNames = [
  "Gabriela",
  "Adriana",
  "Jesus",
  "Andrea",
  "Javmir",
  "Roger",
  "JesusA",
];
console.log(classNames[5]);

//4__________________
const names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"];
console.log(names.slice(1, 3));
names.splice(3, 1, "Parma");
console.log(names);

//5_________________

console.log(names.join(" "));

//6___________________
const sentence = "El perro de San Roque no tiene rabo";
console.log(sentence.split(" "));
console.log(sentence.split(""));

//7_____________________

let num = prompt("ingresa numeros");
const array5 = num.split('');

function parImpar(array5) {
  let par = 0;
  let impar = 0;

  for (let i = 0; i < array5.length; i++) {
    if (array5[i] > 0 && array5[i] <= 9) {
      if (array5[i] % 2 === 0) {
        par++;
      } else {
        impar++;
      }
    } else {
      break;
    }
  }
  return console.log("Pares: "+par+" Impares: "+impar);
}

parImpar(array5);

//8____________________________

const shifts = [
  ["lunes", "María"],
  ["martes", "Luis"],
  ["miercoles", "Antonia"],
  ["jueves", "Pedro"],
  ["viernes", "Marisa"],
  ["sabado", "Sin Servicio"],
  ["domingo", "Sin Servicio"],
];

let day = prompt("ingrese dia del servicio");

function manager(day) {
  for (let i = 0; i < shifts.length; i++) {
    if (day === shifts[i][0]) {
      return console.log("Este dia se encarga " + shifts[i][1]);
    }
  }
}

manager(day);

//9__________________________

const store = [
  ["monitor", "200€"],
  ["teclado", "20€"],
  ["raton", "10€"],
];

let product = prompt("Ingrese nombre de producto");

function precio(product) {
  for (let i = 0; i < store.length; i++) {
    if (product === store[i][0]) {
      return console.log(store[i][1]);
    }
  }
}
precio(product.toLowerCase());
