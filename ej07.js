import  {getCurrencyAbbreviation}  from 'country-currency-map';
let monedaDelPais, codigoPais;
codigoPais = 'Argentina';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(monedaDelPais)
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'United States';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(codigoPais) {
    return getCurrencyAbbreviation(codigoPais);
}