let boton = document.getElementById("boton");

boton.addEventListener("click", function () {
  let texto = document.getElementById("texto");
  let lista = document.getElementById("lista");
  let li = document.createElement("li");
  li.textContent = texto.value;
  lista.append(li);
});
