let ul = document.querySelector('ul');

let e1 = document.createElement('li');
let e2 = document.createElement('li');
let e3 = document.createElement('li');
let e4 = document.createElement('li');

e1.textContent = "elemento 1";
e2.textContent = "elemento 2";
e3.textContent = "elemento 3";
e4.textContent = "elemento 4";

ul.append(e1);
ul.append(e2);
ul.append(e3);
ul.append(e4);