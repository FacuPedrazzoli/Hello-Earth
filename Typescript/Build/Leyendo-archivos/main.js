"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leyendoArchivos = void 0;
let leyendoArchivos = (obtenerContArchivo) => {
    let strnumeros = obtenerContArchivo();
    let arrNumeros = strnumeros.split(' ');
    let objetoSinRepetidos = {};
    arrNumeros.forEach(function (elemento) {
        objetoSinRepetidos[elemento] = elemento;
    });
    let numerosSinRepetir = Object.values(objetoSinRepetidos);
    return numerosSinRepetir;
};
exports.leyendoArchivos = leyendoArchivos;
