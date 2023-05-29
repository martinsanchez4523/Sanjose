document.addEventListener("DOMContentLoaded", function() {

    const username = localStorage.getItem("username");
    if (username !== "admin") {

      window.location.href = "/LOGIN/index.html";
    }
  });

  var imagenInicio = document.querySelector('.imagen-inicio');

imagenInicio.addEventListener('click', function() {

  window.location.href = "/INICIO/inicio.html";
});