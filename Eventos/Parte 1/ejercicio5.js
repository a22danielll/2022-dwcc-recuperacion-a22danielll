let pulsador = document.getElementById("pulsador");
let menu = document.getElementById("menu");

pulsador.addEventListener("click", function () {
    if(menu.style.visibility=='visible'){
        menu.style.visibility = 'hidden';
    }else{
        menu.style.visibility = 'visible';
    }
});
