import 'dotenv/config'
import fs from 'fs'
import crearUsuariosRandom from './Creando-Usuarios-TS/main'
import crearImpuestoSobreUsuarios from './Generando-Impuesto/main'
import { corteListon } from './Cortes-liston/main'
import { leyendoArchivos } from './Leyendo-archivos/main'
import { hola } from './Uso-de-TS'
import eldefault from './Uso-de-TS'
import httpserver from './Http/Default'

switch (process.argv[2]) {
    case 'crearUsuariosRandom':
        crearUsuariosRandom()
        break
    case 'crearImpuestoSobreUsuarios':
        crearImpuestoSobreUsuarios()
        break
    case 'cortesListon':
        corteListon()
        break
    case 'leerarchivos':
        {
            let path = 'C:/Hello-Earth/Typescript/Backend/Src/Leyendo-archivos/documento-con-valores.txt'
            let res = leyendoArchivos(() =>
                // "20 10 15 10 101"
                fs.readFileSync(path, 'utf-8')
            )
            console.log(res)
        }
        break
    case 'ts':
        hola()
        eldefault()
        break
    case 'http':
        httpserver()
        break
    default:
        console.log('Atencion, se debe enviar un parametro con la accion a seguir')
}