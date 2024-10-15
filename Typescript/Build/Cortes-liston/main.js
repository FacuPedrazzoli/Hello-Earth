"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerDataTxt = exports.encontrarSolucion = exports.randomizarListon = exports.aplicarCortes = exports.calcularDesperdicio = void 0;
const fs_1 = __importDefault(require("fs"));
let calcularDesperdicio = (sumaCortes, tamañoListon) => {
    return Math.floor(1000 - Math.round((sumaCortes / tamañoListon) * 1000)) / 10;
};
exports.calcularDesperdicio = calcularDesperdicio;
let aplicarCortes = (cortes, tamañoListon) => {
    let sumaCortes = cortes.reduce((tot, c) => tot + c, 0);
    let arrVacio = [];
    if (sumaCortes <= tamañoListon) {
        return {
            cortesAplicados: cortes,
            cortesRestantes: arrVacio,
            quedanCortes: false,
            desperdicio: (0, exports.calcularDesperdicio)(sumaCortes, tamañoListon),
        };
    }
    let totalConsumido = 0;
    let totalProyectado = 0;
    let salir = false;
    let puntoDeCorte = 0;
    for (let idx = 0; !salir && idx < cortes.length; idx++) {
        totalProyectado += cortes[idx];
        if (totalProyectado > tamañoListon) {
            puntoDeCorte = idx;
            salir = true;
        }
        else {
            totalConsumido = totalProyectado;
        }
    }
    return {
        cortesAplicados: cortes.slice(0, puntoDeCorte),
        cortesRestantes: cortes.slice(puntoDeCorte),
        quedanCortes: true,
        desperdicio: (0, exports.calcularDesperdicio)(totalConsumido, tamañoListon)
    };
};
exports.aplicarCortes = aplicarCortes;
let randomizarListon = () => {
    return (Math.random() > 0.50) ? 300 : 420;
};
exports.randomizarListon = randomizarListon;
let encontrarSolucion = (cortes) => {
    let solucion = [];
    while (cortes.length > 0) {
        let liston = (0, exports.randomizarListon)();
        let resp = (0, exports.aplicarCortes)(cortes, liston);
        let itemSolucion = {
            cortes: resp.cortesAplicados,
            liston: liston,
            desperdicio: resp.desperdicio
        };
        solucion.push(itemSolucion);
        cortes = resp.cortesRestantes;
    }
    return solucion;
};
exports.encontrarSolucion = encontrarSolucion;
let obtenerDataTxt = (path) => {
    try {
        let data = fs_1.default.readFileSync(path, 'utf-8');
        return data.split(' ');
    }
    catch (error) {
        console.error('Error al leer el archivo:', error);
        return [];
    }
};
exports.obtenerDataTxt = obtenerDataTxt;
let forEver = () => {
    let mejorSolucion = [];
    let menorDesperdicio = 100;
    let cortes = (0, exports.obtenerDataTxt)('C:\\Hello-Earth\\Typescript\\Src\\Cortes-liston\\cortes.txt').map(Number);
    fs_1.default.writeFileSync('Registro-de-soluciones.txt', '');
    for (let i = 0; i < 1000000000; i++) {
        cortes = cortes.sort(() => Math.random() - 0.5);
        let solucion = (0, exports.encontrarSolucion)(cortes);
        let desperdicioDeLaSolucion = solucion.reduce((a, b) => a + b.desperdicio, 0);
        if (desperdicioDeLaSolucion < menorDesperdicio) {
            menorDesperdicio = desperdicioDeLaSolucion;
            mejorSolucion = solucion;
            console.log('Nueva mejor solución encontrada:', mejorSolucion);
            console.log('Desperdicio total:', menorDesperdicio);
            fs_1.default.appendFileSync('Registro-de-soluciones.txt', JSON.stringify({ mejorSolucion, menorDesperdicio }, null, 2) + ',\n');
        }
    }
    console.log('Mejor solución final:', mejorSolucion);
    console.log('Desperdicio total final:', menorDesperdicio);
};
forEver();
