import 'dotenv/config'
import fs from 'fs'
import crearUsuariosRandom from './Creando-Usuarios-TS/main'
import crearImpuestoSobreUsuarios from './Generando-Impuesto-en-usuario/main'
import { aplicarCortes } from './Cortes-liston/main'
import test_liston from './Cortes-liston/testeo'
import { leyendoArchivos } from './Leyendo-archivos/main'

switch (process.argv[2]) {
    case 'Creando-Usuarios-TS':
        crearUsuariosRandom()
        break
    case 'Generando-Impuesto-en-usuario':
        crearImpuestoSobreUsuarios()
        break        
    case 'testeo':
        test_liston()
        break
    case 'Cortes-liston':
        //aplicarCortes()
        break
    case 'Leyendo-archivo':
        {
            let path = '../src/Leyendo-archivos/numeros.txt'
            let res = leyendoArchivos(() => fs.readFileSync(path,'utf-8'))
                // "20 10 15 10 101"
            console.log(res)
        }
        break
    case 'cliente':        
        break
    case 'levantararchivos':        
        break
    case 'levantararchivosmongo':        
        break
    case 'collatz':        
        break
    case 'pruebamongo':        
        break
    case 'pruebapasswords':        
        break
    case 'crearjwt':        
        break
    case 'verificarjwt':        
        break
    case 'leerjwt':        
        break
    case 'servidorsito':        
        break
    case 'pruebalog':        
        break
    case 'crearclientesmongo':        
        break    
    default:
        console.log('Atencion, se debe enviar un parametro con la accion a seguir')
}