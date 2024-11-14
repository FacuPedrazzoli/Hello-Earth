import 'dotenv/config'
import crearObjetoFake from './Gen-usuario'
import { crearConexion, query } from './Driver-Promise'

let fnInit = async (cant) => {
    let conn = await crearConexion()
    let sql = "INSERT INTO usuarios values (?, ?, ?, ?, ?, ?, ?, ?, ?)"
    
    for (let idx = 0; idx < cant; idx++) {
        console.log(idx)
        let xsIns = Object.values(crearObjetoFake())
        await query(conn, sql, xsIns)
    }
    conn.end()
}

//fnInit(2000000000)


let obtenerUsuariosPorNombreYAmount = async () => {

    let conn = await crearConexion()
    let sql = "SELECT * FROM usuarios where firstName = ? and amount > ?"
    let resulSet = await query(conn, sql, ['Andy', 1])

    conn.end()
    console.log()
}

let funcionQueTomaElTiempo = async (fn) => {

    let firstTime = new Date().getTime()
    console.log('A continuacion se va a tomar la metrica : ' + firstTime)

    await fn()

    let secondTime = new Date().getTime()
    console.log('Tiempo transcurrido: ' + (secondTime - firstTime))
}

funcionQueTomaElTiempo(obtenerUsuariosPorNombreYAmount)