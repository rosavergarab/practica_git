var arr = [Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10, Math.random()*10];
console.log(arr);
var minimo = Math.min(...arr);
var raiz = Math.sqrt(minimo);
console.log("El valor mínimo es: " + minimo);
console.log("La raiz de ese valor mínimo es: " + raiz);
