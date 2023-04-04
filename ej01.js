let textoEntrada01 = "Escuela";
let textoEntrada02 = "ORT";
let textoSalida = "";
textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear();
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);

function concatInvert(textoEntrada01, textoEntrada02)
{
    const src = "reverse";
 
    const reverse = src.split('').reverse().join('');
    console.log(reverse);
}

const str1 = 'Escuela';
const str2= 'Ort';
const str = str1+str2;

const reversedString = reverseString(str);
console.log(reversedString);

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  