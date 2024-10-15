"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aplicarCortes = void 0;
let fs = require('fs');
let calcularDesperdicio = (sumaCortes, tamañoListon) => {
    return Math.floor(1000 - Math.round(sumaCortes /
        tamañoListon * 1000)) / 10;
};
let aplicarCortes = (cortes, tamañoListon) => {
    let sumaCortes = cortes.reduce((tot, c) => tot + c, 0);
    let arrVacio = [];
    if (sumaCortes <= tamañoListon) {
        return {
            cortesAplicados: cortes,
            cortesRestantes: arrVacio,
            quedanCortes: false,
            desperdicio: calcularDesperdicio(sumaCortes, tamañoListon),
        };
    }
    let totalConsumido = 0;
    let totalProyectado = 0;
    let salir = false;
    let puntoDeCorte = 0;
    for (let idx = 0; salir === false; idx++) {
        totalProyectado += cortes[idx];
        if (totalProyectado > tamañoListon) {
            puntoDeCorte = idx;
            salir = true;
            continue;
        }
        totalConsumido = totalProyectado;
    }
    return {
        cortesAplicados: cortes.slice(0, puntoDeCorte),
        cortesRestantes: cortes.slice(puntoDeCorte),
        quedanCortes: true,
        desperdicio: calcularDesperdicio(totalConsumido, tamañoListon)
    };
};
exports.aplicarCortes = aplicarCortes;
let randomizarListon = () => { return (Math.random() > 0.50) ? 300 : 420; };
let encontrarSolucion = (cortes) => {
    let solucion = [];
    for (let continuar = true; continuar;) {
        let liston = randomizarListon();
        let resp = (0, exports.aplicarCortes)(cortes, liston);
        let itemSolucion = {
            cortes: resp.cortesAplicados,
            liston: liston,
            desperdicio: resp.desperdicio
        };
        solucion.push(itemSolucion);
        continuar = resp.quedanCortes;
    }
    return solucion;
};
let obtenerDataTxt = (path) => {
    try {
        let data = fs.readFileSync(path, 'utf-8');
        let arrData = data.split(' ');
        return arrData;
    }
    catch (error) {
        console.error('Error al leer el archivo:', error);
        return [];
    }
};
let forEver = () => {
    let mejorSolucion = [];
    let menorDesperdicio = 100;
    let cortes = obtenerDataTxt('Proyectos/Proyectos-TypeScript/Proyecto-Integrador/src/Cortes-liston/cortes.txt');
    for (;;) {
        cortes = cortes.sort(Math.random() - 0.5);
        let solucion = encontrarSolucion(cortes);
        let desperdicioDeLaSolucion = solucion.map(z => z.desperdicio)
            .reduce((a, b) => a + b, 0);
        if (desperdicioDeLaSolucion < menorDesperdicio) {
            menorDesperdicio = desperdicioDeLaSolucion;
        }
    }
};
