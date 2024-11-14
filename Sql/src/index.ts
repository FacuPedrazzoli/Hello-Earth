import 'dotenv/config'
import crearObjetoFake from './Gen-usuario'
import { crearConexion, query } from './Driver-Promise'

/*
En vez de llamar a fnInit, quiero que hagan un select sobre la tabla
usuarios con un where que tengo nombre = 'Andy' y ammount > 1
*/

let obtenerUsuariosPorNombreYAmount = async () => {

    let conn = await crearConexion()
    let sql = "SELECT * FROM usuarios where firstName = ? and amount > ?"
    let resulSet = await query(conn, sql, ['Andy', 1])

    conn.end()
    console.log(resulSet)
}

obtenerUsuariosPorNombreYAmount()