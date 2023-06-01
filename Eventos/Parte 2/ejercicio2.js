// Obtén todos los nodos del árbol
let lista = document.querySelectorAll('.tree li');

// Agrega el manejador de eventos a cada nodo
lista.forEach(function(node) {
  node.addEventListener('click', function() {
    let ul = this.getElementsByTagName('ul');

    for (var i = 0; i < ul.length; i++) {
      ul[i].classList.toggle('hidden');
    }
  });
});
