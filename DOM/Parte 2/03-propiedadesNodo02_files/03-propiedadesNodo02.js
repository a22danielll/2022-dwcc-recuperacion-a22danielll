let enlaces = document.getElementsByTagName('a');
let cantidad = enlaces.length;
console.log(cantidad);

let enlaces2 = document.getElementsByTagName('a')[cantidad - 2].href;
console.log(enlaces2);

let numEnlaces = 0;

for (let i = 0; i < cantidad.length; i++) {
    if(enlaces[i] == 'http://proba' ){
        numEnlaces++;
    } 
}
console.log(numEnlaces);

let parrafo = document.getElementsByTagName('p')[2];
console.log(parrafo);

let a = parrafo.getElementsByTagName('a');
console.log(a);

console.log(a.length);

for (let i = 0; i < enlaces.length; i++) {
    if(enlaces[i] = 'http://proba' ){
        enlaces[i].style.color = 'orange';
    } 
}

