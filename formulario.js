// Seleccionamos los elementos necesarios del DOM
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const saludo = document.getElementById("saludo");

// Mostrar saludo personalizado en tiempo real
inputNombre.addEventListener("input", () => {
  if (inputNombre.value.trim() === "") {
    saludo.textContent = "";
  } else {
    saludo.textContent = "Hola, " + inputNombre.value;
  }
});

// Mensaje de agradecimiento al enviar el formulario
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputNombre.value.trim() !== "") {
    alert("Gracias por tu mensaje, " + inputNombre.value + "!");
  } else {
    alert("Por favor, escribí tu nombre antes de enviar el mensaje.");
  }
});
