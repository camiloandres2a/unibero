class User {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
  }
}



class Requisitos extends User{
  constructor(nombre, apellido, edad) {
    super(nombre, apellido, edad)
    if (this.edad >= 18){
      console.log(`Tú ${this.nombre} ${this.apellido} tienes ${this.edad} y eres mayor de edad`);
    }else{
      console.log(`Tú ${this.nombre} ${this.apellido} tienes ${this.edad} y eres menor de edad`);
    }
  }

}

var camilo = new Requisitos ('Camilo', 'Alvarez', 16)
var daniela = new Requisitos ('Daniela', 'Garcia', 18)