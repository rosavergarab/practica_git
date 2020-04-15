class Persona {

constructor(nombre) { this.nombre = nombre; }
obtenerNombre () { return this.nombre; }
};

let persona1 = new Persona ("Rosa");
let nombre1 = persona1.obtenerNombre();
console.log("El primer nombre es: " + nombre1);

let persona2 = new Persona ("Luis");
let nombre2 = persona2.obtenerNombre();
console.log("El segundo nombre es: " + nombre2);

let persona3 = new Persona ("Michael");
let nombre3 = persona3.obtenerNombre();
console.log("El tercer nombre es: " + nombre3);