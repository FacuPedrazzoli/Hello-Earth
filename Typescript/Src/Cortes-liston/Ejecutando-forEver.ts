import { obtenerDataTxt, encontrarSolucion, ItemSolucion } from './main';
import fs from 'fs';

// Función para ejecutar forEver y mostrar resultados en la consola
const ejecutarForEver = () => {
    let mejorSolucion: ItemSolucion[] = [];
    let menorDesperdicio = 100;
    let cortes = obtenerDataTxt('C:\\Hello-Earth\\Typescript\\Src\\Cortes-liston\\cortes.txt').map(Number);

    // Limpiar el archivo de soluciones anteriores
    fs.writeFileSync('Registro-de-soluciones.txt', '');

    for (let i = 0; i < 1000000000000; i++) {
        cortes = cortes.sort(() => Math.random() - 0.5);
        let solucion = encontrarSolucion(cortes);
        let desperdicioDeLaSolucion = solucion.reduce((a, b) => a + b.desperdicio, 0);

        if (desperdicioDeLaSolucion < menorDesperdicio) {
            menorDesperdicio = desperdicioDeLaSolucion;
            mejorSolucion = solucion;
            console.log('Nueva mejor solución encontrada:', mejorSolucion);
            console.log('Desperdicio total:', menorDesperdicio);
            // Agregar la nueva mejor solución al archivo
            fs.appendFileSync('Registro-de-soluciones.txt', JSON.stringify({ mejorSolucion, menorDesperdicio }, null, 2) + ',\n');
        }
    }

    console.log('Mejor solución final:', mejorSolucion);
    console.log('Desperdicio total final:', menorDesperdicio);
};

// Ejecutar la función
ejecutarForEver();