import { aplicarCortes, ItemSolucion, tamañoListon } from '../../Build/Cortes-liston/main'; // Importamos la lógica desde TypeScript

let contadorClicks = 0;

const calcularCortes = () => {
    contadorClicks++;

    // Obtiene los valores ingresados en el campo de texto como una lista de números separados por comas
    const cortesInput = document.getElementById('cortes').value;
    let cortes = cortesInput.split(',').map(Number); // Convierte la cadena en un array de números

    // Aplicamos los cortes usando la función importada desde TypeScript
    let resultado = aplicarCortes(cortes, tamañoListon);

    // Actualizamos la celda de "Corte 2" para mostrar los resultados
    const celdaResultado = document.querySelector('#tabla_de_cortes tbody tr td:nth-child(2)');
    celdaResultado.innerHTML = `Desperdicio: ${resultado.desperdicio}%`;

    // También podemos imprimir más detalles en la consola
    console.log(`Cortes aplicados: ${resultado.cortesAplicados}`);
    console.log(`Cortes restantes: ${resultado.cortesRestantes}`);
    console.log(`Desperdicio: ${resultado.desperdicio}%`);

    // Actualizamos el botón con el contador de clics
    const boton = document.getElementById('enviarCortes');
    boton.value = `Calcular (${contadorClicks})`;
};

window.onload = () => {
    document.getElementById('enviarCortes').addEventListener('click', calcularCortes);
};
