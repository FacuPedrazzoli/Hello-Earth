import { forEver, ItemSolucion } from '../Src/Cortes-liston/main';

// Evento para procesar los cortes al hacer clic en el botón
document.getElementById("procesarButton").addEventListener("click", function() {
    const cortesInput = document.getElementById("cortesInput").value;

    // Ejecutar la función `forEver` con los cortes del usuario
    const solucion = forEver(cortesInput);
    
    // Mostrar los listones en el HTML
    mostrarListones(solucion);
});

// Función para mostrar los listones y cortes en el HTML
function mostrarListones(solucion) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ''; // Limpiar resultados previos

    solucion.forEach((item, index) => {
        const listonCol = document.createElement("div");
        listonCol.classList.add("col");

        const listonCard = document.createElement("div");
        listonCard.classList.add("card", "p-3");

        const listonTitle = document.createElement("h5");
        listonTitle.classList.add("card-title", "text-center");
        listonTitle.textContent = `Listón ${index + 1} - Tamaño: ${item.liston} cm`;
        listonCard.appendChild(listonTitle);

        const desperdicioInfo = document.createElement("p");
        desperdicioInfo.classList.add("text-muted", "text-center");
        desperdicioInfo.textContent = `Desperdicio: ${item.desperdicio}%`;
        listonCard.appendChild(desperdicioInfo);

        item.cortes.forEach(corte => {
            const corteDiv = document.createElement("div");
            corteDiv.classList.add("corte");
            corteDiv.style.backgroundColor = getRandomColor();
            corteDiv.textContent = `${corte} cm`;
            listonCard.appendChild(corteDiv);
        });

        listonCol.appendChild(listonCard);
        resultadoDiv.appendChild(listonCol);
    });
}

// Función para generar un color aleatorio
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
