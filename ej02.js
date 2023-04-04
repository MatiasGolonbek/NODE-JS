import{suma, resta, multiplicar, dividir} from "./src/modules/matematica.js";
let a = 10;
let b = 4;
let total;

total=suma(a,b)
console.log(`la suma del numero ${a} y el numero ${b} es de: ${total}`)
total=resta(a,b)
console.log(`la resta del numero ${a} y el numero ${b} es de: ${total}`)
total=multiplicar(a,b)
console.log(`la multiplicacion del numero ${a} y el numero ${b} es de: ${total}`)
total=dividir(a,b)
console.log(`la division del numero ${a} y el numero ${b} es de: ${total}`)