/*  Medidas y ejercicios

1)  Teniendo un listos de 3 metros de madera  y dados unos cortes que necesite el cliente
    Mostrar cuantos listones necesito y el desperdicio.

2)  Para probabilidad basica. Si tengo por ejemplo:
    Que sacar la probabilidad que salga 5 sobre 100 numeros 0.01

    Averiguar la probabilidad de que salga:
    a) Primero 5
    b)Despues 20

    No tienen que ser pegados

    como se hace? Se hace un for infinito donde voy tirando numeros random y veo si sale el 5.
    Si es asi. Veo cuantos tire hasta ahora.

    Arranco nuevamente entonces primiero me va a dar. 0.15 / 0.0001 / 0.002 / 0.10 ...... 0.01

3)  Tengo un array de 4 compradores:

    Ejemplo:
        10000 | 115        120 | 500
        20000 | 110        
        32000 | 105        
        72000 | 99         
*/

// Ejercicio de cortes
// 1)

let redondeando = (numero) => {return parseFloat(numero.toFixed(2))}

let largoDeCorte = (cortes) => {
    let total = 0
    cortes.forEach(corte => {total += corte})
    return redondeando(total)
}

let cantidadDeListones = (liston, cortes) => {
    let total = largoDeCorte(cortes)
    let cantidadDeListones = 0
    let totalDeMadera = 0

    while (totalDeMadera < total) {
        cantidadDeListones += 1
        totalDeMadera = liston * cantidadDeListones
    }

    return {
        cantidadDeListones: cantidadDeListones,
        totalDeMadera: totalDeMadera
    }
}

let cantidadDeListonesYDesperdicios = (liston, cortes) => {
    let total = largoDeCorte(cortes)
    let cantidadListonesYMadera = cantidadDeListones(liston, cortes)
    let totalDeMadera = cantidadListonesYMadera.totalDeMadera
    let listones = cantidadListonesYMadera.cantidadDeListones
    let desperdicio = 0

    desperdicio = totalDeMadera - total
    return console.log(`Necesitas ${redondeando(total)} metros de madera y ${listones} liston/es el desperdicio es de ${redondeando(desperdicio)} metros`)
}

let longitudListon = 3
let cortesNecesarios = [0.6, 1.8, 0.3, 0.4, 1.8, 2.3]

console.log(`\n\n///////    Ejercicio de listones   ///////\n\n`)
cantidadDeListonesYDesperdicios(3, cortesNecesarios)


// Ejercicio de probabilidad

let redondean2 = (numero) => {return parseFloat(numero.toFixed(2))}

let calculandoProbabilidad = (numero, intentos) => {
    let apariciones = 0
    let listaDeIntentos = []

    for (let i = 0; i <= intentos; i++) {
        let intento = Math.floor(Math.random() * 100)
        if (intento === numero) {
            apariciones += 1
        }
        listaDeIntentos.push(intento)
    }

    let probabilidad = (apariciones / intentos) * 100
    return {
        porcentaje : redondean2(probabilidad),
        listaDeIntentos: listaDeIntentos
    }
}

let intentos = 100
let numero = 5
let probabilidad = calculandoProbabilidad(numero, intentos)

console.log(`\n\n///////    Ejercicio de probabilidad   ///////\n\n`)
console.log(`La probabilidad de que salga el número ${numero} en ${intentos} intentos es: ${probabilidad.porcentaje}%`)
console.log(`\nLista de intentos:\n`)
console.log(probabilidad.listaDeIntentos)














// Ejercicios de compradores

let libroDeordenes = {
    compras: [
        { precio: 1000, volumen: 115 },
        { precio: 2000, volumen: 110 },
        { precio: 3200, volumen: 105 },
        { precio: 7200, volumen: 99 }
    ],
    ventas: [
        { precio: 500, volumen: 120 },
        { precio: 5000, volumen: 125 },
        { precio: 6000, volumen: 130 },
        { precio: 9000, volumen: 140 },
    ]
}

// Función para calcular el volumen total de un array de órdenes
let calculadorDeVolumenTotal = (ordenes) => {
    // Utiliza reduce para sumar los volúmenes de todas las órdenes en el array
    return ordenes.reduce((total, orden) => total + orden.volumen, 0)
}

// Calcular el volumen total de órdenes de compra y venta
let volumenTotalDeCompra = calculadorDeVolumenTotal(libroDeordenes.compras)
let volumenTotalDeVenta = calculadorDeVolumenTotal(libroDeordenes.ventas)

// Función para comparar los volúmenes totales de órdenes de compra y venta
let comparadorDeVolumenes = (volumenCompras, volumenVentas) => {
    if (volumenCompras > volumenVentas) {
        return 'Sentimiento alcista (más presión de compra)'
    } else if (volumenCompras < volumenVentas) {
        return 'Sentimiento bajista (más presión de venta)'
    } else {
        return 'Sentimiento neutral (presión de compra y venta equilibrada)'
    }
}

// Resultado de la comparación
let resultado = comparadorDeVolumenes(volumenTotalDeCompra, volumenTotalDeVenta)

console.log(`\n\n///////    Ejercicio de compradores   ///////\n\n`)
// Imprimir los resultados
console.log(`volumenn total de órdenes de compra: ${volumenTotalDeCompra}`)
console.log(`volumenn total de órdenes de venta: ${volumenTotalDeVenta}`)
console.log(`Resultado: ${resultado}`)