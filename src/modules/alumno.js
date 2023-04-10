export default class alumno{
    constructor(username,dni){
        this.username = username;
        this.dni = dni;
    }
    setUsername(username){
        this.username = username;
    }
    setDNI(dni){
        this.dni = dni;
    }
    print(){
        console.log(`El alumno se llama ${this.username} y su dni es ${this.dni} `);    
    }
}

