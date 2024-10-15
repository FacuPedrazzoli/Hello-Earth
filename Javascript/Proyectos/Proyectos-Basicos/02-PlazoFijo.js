const tna = 1
const deposito = 1000
const periodo = 12

const plazoFijo = (tna, monto, tiempo) => {
    let capitalFinal = monto
    let todosLosPeriodos = []
    for (let i = 0; i < tiempo; i++) {
        capitalFinal = capitalFinal * (1 + (tna / periodo))
        capitalFinal = parseFloat(capitalFinal.toFixed(2))
        todosLosPeriodos.push(capitalFinal)
    }
    return {capitalFinal,todosLosPeriodos}
}

console.log(plazoFijo(tna, deposito, periodo))