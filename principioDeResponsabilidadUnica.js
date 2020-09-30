class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
}

class saludarPersona extends Persona{
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura)
  }

  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}  y soy desarrollador/a`);
  }
}

var camilo = new saludarPersona ('camilo', 'alvarez', 1.80)

camilo.saludar()

