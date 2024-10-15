// Datos iniciales del stock
const stockListones = [
    { nombre: "Listón 1", largo: 200, stock: 50 },
    { nombre: "Listón 2", largo: 300, stock: 30 },
    { nombre: "Listón 3", largo: 150, stock: 20 }
];

// Inicializar el stock en la página
const stockListElement = document.getElementById('stock-list');
const listonSelectElement = document.getElementById('liston');
let corteCounter = 1;

// Función para mostrar el stock en la página
let mostrarStock = () => {
    stockListElement.innerHTML = '';
    listonSelectElement.innerHTML = '';
    stockListones.forEach((liston, idx) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${liston.nombre} - Largo: ${liston.largo}cm - Stock: ${liston.stock}`;
        stockListElement.appendChild(listItem);

        // Agregar opción al selector de listones
        const option = document.createElement('option');
        option.value = idx;
        option.textContent = `${liston.nombre} (Largo: ${liston.largo}cm)`;
        listonSelectElement.appendChild(option);
    });
}

// Función para agregar otro campo de corte
document.getElementById('add-corte').addEventListener('click', function () {
    corteCounter++;
    const cortesGroup = document.getElementById('cortes-group');
    
    // Crear un nuevo input para otro corte
    const newLabel = document.createElement('label');
    newLabel.setAttribute('for', `corte${corteCounter}`);
    newLabel.textContent = `Longitud del corte ${corteCounter} (cm):`;
    
    const newInput = document.createElement('input');
    newInput.setAttribute('type', 'number');
    newInput.setAttribute('id', `corte${corteCounter}`);
    newInput.setAttribute('name', `corte${corteCounter}`);
    newInput.setAttribute('min', '1');
    
    cortesGroup.appendChild(newLabel);
    cortesGroup.appendChild(newInput);
});

// Manejar el formulario de cortes
document.getElementById('form-cortes').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const listonidx = parseInt(document.getElementById('liston').value);
    const listonSeleccionado = stockListones[listonidx];
    
    let totalLargoNecesario = 0;
    let valid = true;
    
    // Recorremos todos los cortes ingresados
    for (let i = 1; i <= corteCounter; i++) {
        const corte = parseInt(document.getElementById(`corte${i}`).value);
        if (isNaN(corte) || corte <= 0) {
            alert('Ingresa una longitud de corte válida.');
            valid = false;
            break;
        }
        totalLargoNecesario += corte;
    }
    
    if (!valid) return;
    
    // Calcular cuántos listones necesitamos
    const listonesNecesarios = Math.ceil(totalLargoNecesario / listonSeleccionado.largo);
    
    if (listonSeleccionado.stock >= listonesNecesarios) {
        // Restar la cantidad de listones usados del stock
        listonSeleccionado.stock -= listonesNecesarios;
        alert(`Necesitas ${listonesNecesarios} listones para realizar todos los cortes.`);
    } else {
        alert('No hay suficiente stock para realizar todos los cortes.');
    }
    
    // Actualizar la lista de stock en la página
    mostrarStock();
});

// Mostrar el stock al cargar la página
mostrarStock();