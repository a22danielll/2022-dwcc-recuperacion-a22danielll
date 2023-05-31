console.log('Cando o cursor do rato entre e saia do botón, mostra unha mensaxe por consola indicándoo.');

document.getElementById('ocultar').addEventListener('mouseover',function(){
    console.log('Hola');
});

function eliminar(){
    document.getElementById('texto').removeEventListener();
}
document.getElementById('ocultar').addEventListener('click',eliminar);


let text = document.getElementById('textoExercicio1');
let text2 = document.getElementById('texto');


document.addEventListener('keypress', function (event) {
    text = event.key;
    console.log(text);
    text2.textContent  = text;

  });