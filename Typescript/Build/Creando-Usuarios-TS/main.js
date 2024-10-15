"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuarios_y_ids_1 = __importDefault(require("./usuarios-y-ids"));
let fs = require('fs');
const CARPETA_ARHCIVOS_INPUT = "c:\\input\\";
let generarMilUsuarios = () => {
    let arrUsuarios = [];
    for (let idx = 1; idx <= 1000; idx++) {
        arrUsuarios.push((0, usuarios_y_ids_1.default)());
    }
    return arrUsuarios;
};
let convertiraJson_pura = (obj) => {
    return JSON.stringify(obj, null, 4);
};
let obtenerPathInput = (id) => {
    return [CARPETA_ARHCIVOS_INPUT, id, ".json"].join('');
};
let guardarArchivoInput = (usu) => {
    console.log(usu);
    let strUsu = convertiraJson_pura(usu);
    fs.writeFileSync(obtenerPathInput(usu.id), strUsu, 'utf8');
};
let guardarArrUsuariosInput = (usuarios) => {
    for (let item of usuarios) {
        guardarArchivoInput(item);
    }
};
let visualizarUsuarios = (usuarios) => {
    for (let item of usuarios) {
        console.log(convertiraJson_pura(item));
    }
};
exports.default = () => {
    let xs = generarMilUsuarios();
    let s = visualizarUsuarios(xs);
    guardarArrUsuariosInput(xs);
};
