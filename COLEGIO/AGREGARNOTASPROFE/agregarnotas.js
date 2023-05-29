// Obtener referencias a los elementos del DOM
const buscador = document.getElementById('buscador');
const tablaResultados = document.getElementById('tablaResultados');
const filasTabla = tablaResultados.getElementsByTagName('tr');

// Agregar evento de input al buscador
buscador.addEventListener('input', function() {
  const valorBusqueda = buscador.value.toLowerCase();
  
  // Recorrer las filas de la tabla y ocultar las que no coincidan con la búsqueda
  for (let i = 1; i < filasTabla.length; i++) {
    const fila = filasTabla[i];
    const celdas = fila.getElementsByTagName('td');
    let encontrado = false;
    
    // Verificar si el valor de búsqueda coincide con el grado o el grupo
    for (let j = 0; j < celdas.length; j++) {
      const contenido = celdas[j].textContent.toLowerCase();
      
      if (contenido.includes(valorBusqueda)) {
        encontrado = true;
        break;
      }
    }
    
    // Mostrar u ocultar la fila según el resultado de la búsqueda
    fila.style.display = encontrado ? '' : 'none';
  }
});
