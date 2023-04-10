let texto = 'http://www.https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/1925781/tp01-node.com';



console.log(parseURL(texto));


function parseURL(texto){
    let miUrl = new  URL(texto);
    let phatuz = {
        'host' : miUrl.host,
        'pathname' : miUrl.pathname,
        'parametros' : miUrl.searchParams
    }
    return phatuz;
}
