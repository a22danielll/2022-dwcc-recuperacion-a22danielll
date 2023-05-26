let li3 = document.getElementById('one');
let li4 = document.getElementById('two');
let li = document.createElement('li');
let li2 = document.createElement('li');
li.textContent='2';
li2.textContent='3';
li3.append(li);
li.append(li2);