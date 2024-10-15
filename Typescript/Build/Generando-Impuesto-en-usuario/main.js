"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let fs = require('fs');
const fs_1 = require("fs");
const CARPETA_ARHCIVOS_INPUT = "c:\\input\\";
const CARPETA_ARCHIVOS_OUTPUT = "c:\\output\\";
let leerContenidoArchivo = (rutaDelArchivo) => {
    return (0, fs_1.readFileSync)(rutaDelArchivo, 'utf-8');
};
let leerNombresDeArchivosExistentesCarpeta = () => {
    let nombresArchivos = (0, fs_1.readdirSync)(CARPETA_ARHCIVOS_INPUT);
    return nombresArchivos;
};
let grabarUsuarioConImpuesto = (objUsuario) => {
    let strGrabar = JSON.stringify(objUsuario);
    let path = CARPETA_ARCHIVOS_OUTPUT + objUsuario.id + ".json";
    (0, fs_1.writeFileSync)(path, strGrabar, 'utf8');
};
let aplicarImpuesto = (contenido) => {
    let objUsuario = JSON.parse(contenido);
    objUsuario.impuesto = parseFloat(objUsuario.amount) * 0.05;
    return objUsuario;
};
let recorrerCadaUnoDeLosArchivos = () => {
    let archivos = leerNombresDeArchivosExistentesCarpeta();
    for (let arch of archivos) {
        try {
            let pathCompleto = [CARPETA_ARHCIVOS_INPUT, arch].join('');
            pathCompleto = CARPETA_ARHCIVOS_INPUT + arch;
            pathCompleto = CARPETA_ARHCIVOS_INPUT.concat(arch);
            (0, fs_1.lstatSync)(pathCompleto).isFile();
            console.log(pathCompleto);
            let contenido = leerContenidoArchivo(pathCompleto);
            let objUsuario = aplicarImpuesto(contenido);
            console.log(objUsuario);
            grabarUsuarioConImpuesto(objUsuario);
        }
        catch (err) {
            console.log(err);
        }
    }
};
let leerTodosLosUsuarios = () => {
    recorrerCadaUnoDeLosArchivos();
};
let testearCodigo = () => {
    let conImpuesto = aplicarImpuesto('{"amount":"200"}');
    if (conImpuesto.impuesto === 10) {
        console.log('paso la prueba');
    }
    else {
        console.log('NO paso la prueba');
    }
    console.log(conImpuesto);
};
exports.default = () => {
    leerTodosLosUsuarios();
};
