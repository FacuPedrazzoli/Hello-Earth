"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const fs_1 = __importDefault(require("fs"));
const main_1 = __importDefault(require("./Creando-Usuarios-TS/main"));
const main_2 = __importDefault(require("./Generando-Impuesto-en-usuario/main"));
const testeo_1 = __importDefault(require("./Cortes-liston/testeo"));
const main_3 = require("./Leyendo-archivos/main");
switch (process.argv[2]) {
    case 'Creando-Usuarios-TS':
        (0, main_1.default)();
        break;
    case 'Generando-Impuesto-en-usuario':
        (0, main_2.default)();
        break;
    case 'testeo':
        (0, testeo_1.default)();
        break;
    case 'Cortes-liston':
        break;
    case 'Leyendo-archivo':
        {
            let path = '../src/Leyendo-archivos/numeros.txt';
            let res = (0, main_3.leyendoArchivos)(() => fs_1.default.readFileSync(path, 'utf-8'));
            console.log(res);
        }
        break;
    case 'cliente':
        break;
    case 'levantararchivos':
        break;
    case 'levantararchivosmongo':
        break;
    case 'collatz':
        break;
    case 'pruebamongo':
        break;
    case 'pruebapasswords':
        break;
    case 'crearjwt':
        break;
    case 'verificarjwt':
        break;
    case 'leerjwt':
        break;
    case 'servidorsito':
        break;
    case 'pruebalog':
        break;
    case 'crearclientesmongo':
        break;
    default:
        console.log('Atencion, se debe enviar un parametro con la accion a seguir');
}
