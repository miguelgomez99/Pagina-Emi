document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".formulario");

  form.addEventListener("submit", function (event) {
    const nombre = document.getElementById("Nombre");
    const correo = document.getElementById("Correo");
    const telefono = document.getElementById("Telefono");
    const mensaje = document.getElementById("Mensaje");

    let errores = [];

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/.test(nombre.value.trim())) {
      errores.push("El nombre debe tener al menos 3 letras y solo puede contener letras.");
    }

    if (!correo.value.includes("@") || !correo.value.includes(".")) {
      errores.push("El correo no es válido.");
    }

    if (!/^[0-9]{6,}$/.test(telefono.value.trim())) {
      errores.push("El teléfono debe tener al menos 6 números.");
    }

    if (mensaje.value.trim().length < 10) {
      errores.push("El mensaje debe tener al menos 10 caracteres.");
    }

    if (errores.length > 0) {
      event.preventDefault();
      alert(errores.join("\n"));
    }
  });
});
