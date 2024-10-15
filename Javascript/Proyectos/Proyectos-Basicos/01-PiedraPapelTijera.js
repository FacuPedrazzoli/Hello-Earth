// Array con los valores posibles de piedra, papel o tijera

const valores = ['piedra', 'papel', 'tijera']

//Función que devuelve un indice aleatorio entre 0 y 2

let indiceRandom = () => Math.floor(Math.random() * 3)

//Se elige un valor aleatorio para deadpool y wolverine

let deadpool = valores[indiceRandom()]
let wolverine = valores[indiceRandom()]

// Función del juego de piedra, papel o tijera que determina el ganador y lo retorna

let juego = (deadpool, wolverine) => {
    let ganador = ''
    switch (deadpool) {
        case 'piedra':
            if (wolverine === 'piedra') {
                ganador = 'Empate'
            } else if (wolverine === 'papel') {
                ganador = 'Gana wolverine'
            } else {
                ganador = 'Gana deadpool'
            }
            break
        case 'papel':
            if (wolverine === 'papel') {
                ganador = 'Empate'
            } else if (wolverine === 'tijera') {
                ganador = 'Gana wolverine'
            } else {
                ganador = 'Gana deadpool'
            }
            break
        case 'tijera':
            if (wolverine === 'tijera') {
                ganador = 'Empate'
            } else if (wolverine === 'piedra') {
                ganador = 'Gana wolverine'
            } else {
                ganador = 'Gana deadpool'
            }
            break
    }
    return ganador
}

// Variables para contar las victorias y empates

let deadpoolWins = 0
let wolverineWins = 0
let empates = 0
let probabilidad = []

// Se juega 100 veces y se cuentan las veces que gana deadpool, wolverine o hay empate

for (let i = 0; i < 100; i++) {
    let deadpool = valores[indiceRandom()]
    let wolverine = valores[indiceRandom()]
    
    let resultado = juego(deadpool, wolverine)
    if (resultado === 'Gana deadpool') {
        deadpoolWins++
        probabilidad.push(resultado)

    } else if (resultado === 'Gana wolverine') {
        wolverineWins++
        probabilidad.push(resultado)
    } else {
        empates++
        probabilidad.push(resultado)
    }
}

// Se muestran los resultados en la consola

console.log(`Deadpool ganó ${deadpoolWins} veces`)
console.log(`Wolverine ganó ${wolverineWins} veces`)
console.log(`Hubo ${empates} empates`)
console.log(probabilidad)