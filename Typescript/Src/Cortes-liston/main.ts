import fs from 'fs';

// Función para calcular el desperdicio
export let calcularDesperdicio = (sumaCortes: number, tamañoListon: number): number => {
    return Math.floor(1000 - Math.round((sumaCortes / tamañoListon) * 1000)) / 10
}

// Función para aplicar los cortes
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

    let totalConsumido = 0;
    let totalProyectado = 0;
    let salir = false;
    let puntoDeCorte = 0;

    for (let idx = 0; !salir && idx < cortes.length; idx++) {
        totalProyectado += cortes[idx];
        if (totalProyectado > tamañoListon) {
            puntoDeCorte = idx;
            salir = true;
        } else {
            totalConsumido = totalProyectado;
        }
    }

    return {
        cortesAplicados: cortes.slice(0, puntoDeCorte),
        cortesRestantes: cortes.slice(puntoDeCorte),
        quedanCortes: true,
        desperdicio: calcularDesperdicio(totalConsumido, tamañoListon)
    };
}

// Función para randomizar el tamaño del listón
export let randomizarListon = (): number => {
    return (Math.random() > 0.50) ? 300 : 420
}

// Interfaz para la solución
export interface ItemSolucion {
    cortes: number[],
    liston: number,
    desperdicio: number
}

// Función para encontrar la solución
export let encontrarSolucion = (cortes: number[]): ItemSolucion[] => {
    let solucion: ItemSolucion[] = []

    while (cortes.length > 0) {
        let liston = randomizarListon()
        let resp = aplicarCortes(cortes, liston)
        let itemSolucion: ItemSolucion = {
            cortes: resp.cortesAplicados,
            liston: liston,
            desperdicio: resp.desperdicio
        };
        solucion.push(itemSolucion)
        cortes = resp.cortesRestantes
    }

    return solucion
}

// Función para obtener cortes desde un archivo de texto
export let obtenerDataTxt = (path: string): string[] => {
    try {
        let data = fs.readFileSync(path, 'utf-8')
        return data.split(' ')
    } catch (error) {
        console.error('Error al leer el archivo:', error)
        return []
    }
}

// Función para encontrar la mejor solución
let forEver = () => {
    let mejorSolucion: ItemSolucion[] = []
    let menorDesperdicio = 100
    let cortes = obtenerDataTxt('C:\\Hello-Earth\\Typescript\\Src\\Cortes-liston\\cortes.txt').map(Number)

    // Limpiar el archivo de soluciones anteriores
    fs.writeFileSync('Registro-de-soluciones.txt', '')

    for (let i = 0; i < 1000000000; i++) {
        cortes = cortes.sort(() => Math.random() - 0.5)
        let solucion = encontrarSolucion(cortes)
        let desperdicioDeLaSolucion = solucion.reduce((a, b) => a + b.desperdicio, 0)

        if (desperdicioDeLaSolucion < menorDesperdicio) {
            menorDesperdicio = desperdicioDeLaSolucion;
            mejorSolucion = solucion;
            console.log('Nueva mejor solución encontrada:', mejorSolucion)
            console.log('Desperdicio total:', menorDesperdicio)
            // Agregar la nueva mejor solución al archivo
            fs.appendFileSync('Registro-de-soluciones.txt', JSON.stringify({ mejorSolucion, menorDesperdicio }, null, 2) + ',\n')
        }
    }

    console.log('Mejor solución final:', mejorSolucion)
    console.log('Desperdicio total final:', menorDesperdicio)
}

forEver()