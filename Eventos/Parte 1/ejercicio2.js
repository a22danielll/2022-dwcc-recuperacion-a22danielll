let adicional = document.getElementById('adicional');
let ligazon = document.getElementById('ligazon');
ligazon.addEventListener('click',function(){
    adicional.style.visibility='visible';
    ligazon.style.visibility='hidden';
    return false;
    
});