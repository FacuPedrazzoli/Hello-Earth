import '../Node_modules/dotenv/config'
import fs from 'fs'
import crearUsuariosRandom from './Creando-Usuarios-TS/main'
import crearImpuestoSobreUsuarios from './Generando-Impuesto/main'
import { aplicarCortes } from './Cortes-liston/main'
import { leyendoArchivos } from './Leyendo-archivos/main'

switch (process.argv[2]) {
    case 'crearUsuariosRandom':
        crearUsuariosRandom()
        break
    case 'crearImpuestoSobreUsuarios':
        crearImpuestoSobreUsuarios()
        break
    case 'aplicarCortes':
        {
            //let res = aplicarCortes()
            //console.log(res)
        }
    case 'leyendoArchivos':
        {
            let path = 'C:/Hello-Earth/Typescript/Src/Leyendo-archivos/documento-con-valores.txt'
            let res = leyendoArchivos(() => 
                // "20 10 15 10 101"
                fs.readFileSync(path,'utf-8')
                )
            console.log(res)
        }
        break
    default:
        console.log('Atencion, se debe enviar un parametro con la accion a seguir')
}