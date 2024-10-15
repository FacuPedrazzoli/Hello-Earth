import { Type } from "../../Node_modules/mysql2/typings/mysql/lib/parsers/typeCast"
let fs = require('fs')

let calcularDesperdicio = (sumaCortes, tamañoListon) => {
    return Math.floor(1000 - Math.round(sumaCortes /
        tamañoListon * 1000)) / 10
}

export let aplicarCortes = (cortes: number[], tamañoListon: number) => {
    let sumaCortes: number = cortes.reduce((tot, c) => tot + c, 0)
    let arrVacio: number[] = []
    if (sumaCortes <= tamañoListon) {
        return {
            cortesAplicados: cortes,
            cortesRestantes: arrVacio,
            quedanCortes: false,
            desperdicio: calcularDesperdicio(sumaCortes, tamañoListon),
        }
    }

    let totalConsumido = 0
    let totalProyectado = 0
    let salir = false
    let puntoDeCorte = 0

    for (let idx = 0; salir === false; idx++) {
        totalProyectado += cortes[idx]
        if (totalProyectado > tamañoListon) {
            puntoDeCorte = idx
            salir = true
            continue
        }
        totalConsumido = totalProyectado
    }
    return {
        cortesAplicados: cortes.slice(0, puntoDeCorte),
        cortesRestantes: cortes.slice(puntoDeCorte),
        quedanCortes: true,
        desperdicio: calcularDesperdicio(totalConsumido,tamañoListon)
    }
}

let randomizarListon = () => {return (Math.random() > 0.50) ? 300 : 420}

export interface ItemSolucion {
    cortes:number[],
    liston:number,
    desperdicio:number
}

let encontrarSolucion = (cortes) => {
    let solucion: ItemSolucion[] = []

    for (let continuar = true ;continuar;) {
        let liston = randomizarListon()
        let resp = aplicarCortes(cortes, liston)
        let itemSolucion: ItemSolucion = {
            cortes: resp.cortesAplicados,
            liston: liston,
            desperdicio: resp.desperdicio
        }
        solucion.push(itemSolucion)
        continuar = resp.quedanCortes
    }
    return solucion
}

let obtenerDataTxt = (path: string) => {
    try {
        let data = fs.readFileSync(path, 'utf-8')
        let arrData = data.split(' ')
        return arrData
    } catch (error) {
        console.error('Error al leer el archivo:', error)
        return []
    }
}

let forEver = () => {
    let mejorSolucion = []
    let menorDesperdicio = 100
    let cortes = obtenerDataTxt('Proyectos/Proyectos-TypeScript/Proyecto-Integrador/src/Cortes-liston/cortes.txt')
 
    for (;;) {
       cortes = cortes.sort(Math.random() - 0.5)
       let solucion = encontrarSolucion(cortes)
       let desperdicioDeLaSolucion =
           solucion.map(z => z.desperdicio)
                   .reduce((a, b) => a + b, 0)
 
       if (desperdicioDeLaSolucion < menorDesperdicio) {
           menorDesperdicio = desperdicioDeLaSolucion
           //mejorSolucion = solucion
       }
    }
 }