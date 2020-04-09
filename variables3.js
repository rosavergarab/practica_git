const miFuncion = () => { console.log("Hola a todos");};
const miFuncion2 = (nombre) => { console.log("Hola "+nombre);};
const miFuncion3 = (nombre = "NN") => { console.log("Hola "+nombre);};

miFuncion();
miFuncion2("Rosa");
miFuncion3();
miFuncion3("Maria");