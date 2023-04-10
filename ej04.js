import fs from 'fs';
var entrada = 'entrada.txt';
var salida = 'salida.txt'

Copiar(entrada, salida);
function Copiar(entrada, salida) {
    fs.copyFile(entrada, salida, (err) => {
        if (err) throw err;
        {
            console.log('Copiado polsheta.');
        }
    }
    )
    
}



