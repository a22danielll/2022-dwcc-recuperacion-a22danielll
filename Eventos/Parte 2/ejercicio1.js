let remove = document.getElementsByClassName('remove-button');


for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click',function(){
        let div=this.parentNode;
        div.parentNode.removeChild(div);
    })
    
}
