/* 
Quiero hacer una funcion que tome un array y responda con otro array
El array de input, son todos los cortes que pide el cliente
El output es los cortes que NO entraron en 1 liston
*/

let calcularDesperdicio = (xsCortes, longitudListon) => {
    let sumaCortes = xsCortes.reduce((total, z) => total + z, 0)
    if (sumaCortes > longitudListon) {
        throw new Error('calcularDesperdicio :: longitud inadmisible')
    }
    return (1 - (sumaCortes/longitudListon))
}

let calcularRatio = (acumuladoDeCortes, largoTabla) => {
    if (acumuladoDeCortes > largoTabla) {
        throw new Error('calcularRatio :: longitud inadmisible')
    }
    let resultado = acumuladoDeCortes/largoTabla
    return (Math.round(100 - (resultado * 100)) / 100)
}

let calcularCortesEnListon3M = (arrayDeCortes) => {
    const TOTAL_ITEMS_ARRAY = arrayDeCortes.length
    const TOTAL_LARGO_LISTON = 300
    let largoAcumulado = 0

    for (let indice = 0; indice < TOTAL_ITEMS_ARRAY; indice++) {
        if (arrayDeCortes[indice] > TOTAL_LARGO_LISTON) {
            throw new Error('calcularCortesEnListon3M :: un corte, no puede superar los 3m')
        }                
        // console.log(indice, arrayDeCortes[indice], largoAcumulado)        
        if ((largoAcumulado + arrayDeCortes[indice]) > TOTAL_LARGO_LISTON) {
            // Prueba y error            
            // console.log('calculo desperdicio sobre: ', largoAcumulado)
            return { 
                asignados: arrayDeCortes.slice(0, indice),
                restanAsignar: arrayDeCortes.slice(indice), 
                desperdicio: calcularRatio(largoAcumulado, TOTAL_LARGO_LISTON) }
        }    

        largoAcumulado += arrayDeCortes[indice]
    }

    // console.log('calculo desperdicio sobre: ', largoAcumulado)
    return { 
        asignados: arrayDeCortes.slice(0, TOTAL_LARGO_LISTON),
        restanAsignar: [],         
        desperdicio: calcularRatio(largoAcumulado, TOTAL_LARGO_LISTON) }
}

let reordenandoUnArrayAleatoriamente = (array) => {
    return array.sort(() => Math.random() - 0.5)
}

let totalCortes = [60, 120, 35, 32, 33, 77, 200, 210, 265]
console.log('Total de cortes: ')
console.log(totalCortes)

let prueba1 = calcularCortesEnListon3M(totalCortes)
console.log(prueba1)
prueba1 = calcularCortesEnListon3M(prueba1.restanAsignar)
console.log(prueba1)
prueba1 = calcularCortesEnListon3M(prueba1.restanAsignar)
console.log(prueba1)
prueba1 = calcularCortesEnListon3M(prueba1.restanAsignar)
console.log(prueba1)
prueba1 = calcularCortesEnListon3M(prueba1.restanAsignar)
console.log(prueba1)
prueba1 = calcularCortesEnListon3M(prueba1.restanAsignar)
console.log(prueba1)

console.log(calcularRatio(13, 100))