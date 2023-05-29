var imagenInicio = document.querySelector('.imagen-inicio');

imagenInicio.addEventListener('click', function() {

  window.location.href = "/INICIO/inicio.html";
});
document.addEventListener("DOMContentLoaded", function() {
  const evaluaciones = [
    {
      conceptoAcuerdo: "Concepto 1",
      porcentajeAcuerdo: "20%",
      fechaEvaluacionAcuerdo: "01/05/2023",
      conceptoDetalle: "Concepto 2",
      porcentajeParcial: "30%",
      fechaEvaluacionParcial: "15/05/2023",
      nota: 8.5,
      estado: "Aprobado"
    },
    // Agrega más objetos de evaluaciones aquí
  ];

  const tablaEvaluaciones = document.getElementById("evaluaciones");
  const tbody = tablaEvaluaciones.getElementsByTagName("tbody")[0];

  evaluaciones.forEach(function(evaluacion) {
    const fila = document.createElement("tr");

    const celdaConceptoAcuerdo = document.createElement("td");
    celdaConceptoAcuerdo.textContent = evaluacion.conceptoAcuerdo;
    fila.appendChild(celdaConceptoAcuerdo);

    const celdaPorcentajeAcuerdo = document.createElement("td");
    celdaPorcentajeAcuerdo.textContent = evaluacion.porcentajeAcuerdo;
    fila.appendChild(celdaPorcentajeAcuerdo);

    const celdaFechaEvaluacionAcuerdo = document.createElement("td");
    celdaFechaEvaluacionAcuerdo.textContent = evaluacion.fechaEvaluacionAcuerdo;
    fila.appendChild(celdaFechaEvaluacionAcuerdo);

    const celdaConceptoDetalle = document.createElement("td");
    celdaConceptoDetalle.textContent = evaluacion.conceptoDetalle;
    fila.appendChild(celdaConceptoDetalle);

    const celdaPorcentajeParcial = document.createElement("td");
    celdaPorcentajeParcial.textContent = evaluacion.porcentajeParcial;
    fila.appendChild(celdaPorcentajeParcial);

    const celdaFechaEvaluacionParcial = document.createElement("td");
    celdaFechaEvaluacionParcial.textContent = evaluacion.fechaEvaluacionParcial;
    fila.appendChild(celdaFechaEvaluacionParcial);

    const celdaNota = document.createElement("td");
    celdaNota.textContent = evaluacion.nota;
    fila.appendChild(celdaNota);

    tbody.appendChild(fila);
  });
});
