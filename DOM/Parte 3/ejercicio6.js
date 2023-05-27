function createTree(data) {
  let ul = document.createElement("ul");

  for (let key in data) {
    const li = document.createElement("li");
    li.textContent = key;

    let subtree = createTree(data[key]);
    li.appendChild(subtree);

    ul.appendChild(li);
  }

  
  return ul;
}

// Ejemplo de uso:
const arbore = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

// Crea el árbol y añádelo al elemento con id "tree-container"
const treeContainer = document.getElementById("tree");
const tree = createTree(arbore);
treeContainer.appendChild(tree);
