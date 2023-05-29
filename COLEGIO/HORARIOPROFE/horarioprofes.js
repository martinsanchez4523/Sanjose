var imagenInicio = document.querySelector('.imagen-inicio');

imagenInicio.addEventListener('click', function() {

  window.location.href = "/INICIO/inicio.html";
});
document.addEventListener("DOMContentLoaded", function() {
    const celdas = document.querySelectorAll("td[id^='lunes'], td[id^='martes'], td[id^='miercoles'], td[id^='jueves'], td[id^='viernes']");
    celdas.forEach(function(celda) {
      celda.addEventListener("click", function() {
        const username = localStorage.getItem("username");
  
        if (username === "admin") {
          const contenido = prompt("Ingresa el contenido para esta celda:");
          this.textContent = contenido;
        } else {
          alert("No tienes permisos para modificar el horario.");
        }
      });
    });
  });
  