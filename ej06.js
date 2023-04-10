let texto = 'anash';



console.log(parseURL(texto));


function parseURL(texto){
  try {
    let miUrl = new  URL(texto);
    let phatuz = {
        'host' : miUrl.host,
        'pathname' : miUrl.pathname,
        'parametros' : miUrl.search
    }

    console.log(phatuz.host);
    console.log(phatuz.pathname);
    console.log(phatuz.parametros);
   
  } catch (error) {
    let phatuz = {
    'host' : null,
    'pathname' : null,
    'parametros' : null
    }
    console.log("hubo un error")
  }

}
