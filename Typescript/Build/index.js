"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../Node_modules/dotenv/config");
const fs_1 = __importDefault(require("fs"));
const main_1 = __importDefault(require("./Creando-Usuarios-TS/main"));
const main_2 = __importDefault(require("./Generando-Impuesto-en-usuario/main"));
const main_3 = require("./Leyendo-archivos/main");
switch (process.argv[2]) {
    case 'crearUsuariosRandom':
        (0, main_1.default)();
        break;
    case 'crearImpuestoSobreUsuarios':
        (0, main_2.default)();
        break;
    case 'aplicarCortes':
        {
        }
    case 'leyendoArchivos':
        {
            let path = 'C:/Hello-Earth/Typescript/Src/Leyendo-archivos/documento-con-valores.txt';
            let res = (0, main_3.leyendoArchivos)(() => fs_1.default.readFileSync(path, 'utf-8'));
            console.log(res);
        }
        break;
    case 'test':
        break;
    default:
        console.log('Atencion, se debe enviar un parametro con la accion a seguir');
}
