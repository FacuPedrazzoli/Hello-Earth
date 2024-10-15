
/* Ejercicio 5: Casino
Cada jugada (buscar en internet) rojo, negro o nada
supongamos que yo siempre juego al rojo con este criterio

*/

let numeroRandom = () =>{return Math.floor(Math.random() * 38)}

let JuegoDeLaruleta = () => {
    const ruleta = ['verde','negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro', 'rojo', 'negro','rojo','verde']
    let fichasGanadas = 0
    let fichasPerdidas = 0
    let apuesta = 1
    let jugadasMax = 10

    for (let jugadas = 0 ; jugadas < jugadasMax ; jugadas++) {
        let resultado = ruleta[numeroRandom()]
        if (resultado === 'rojo') {
            console.log(`Apostaste ${apuesta} y ganaste ${apuesta * 2} salio ${resultado}`)
            fichasGanadas += (apuesta * 2) - 1
            apuesta = 1
        } else {
            console.log(`Apostaste ${apuesta} y perdiste, salio ${resultado}`)
            fichasPerdidas += apuesta
            apuesta *= 2
        }
    }
    console.log(`\n\nFichas ganadas: ${fichasGanadas}`)
    console.log(`Fichas perdidas: ${fichasPerdidas}`)
    console.log(`Conseguis una ganancia de ${fichasGanadas - fichasPerdidas}`)
}

JuegoDeLaruleta()