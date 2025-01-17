---

## P R O Y E C T O I N T E G R A D O R E T A P A 1

Autores Axl, Azul, Facu, Les maestres
Fecha 10 de Octubre de 2024

Proposito

Se trata de una calculadora que brinda la informacion necesaria para
realizar cortes en unos listones de madera cuyas dimensiones
iniciales son 300 cm y 420 cm pero estos pueden variar.

Dinámica

El cliente registra en una aplicacion web la cantidad de cortes y sus
medidas, y la calculadora le brinda la cantidad de listones
necesarios realizando la optimizacion que pondere el menor desperdicio
posible.

Descargo de responsabilidad

Las funciones enunciadas a continuación componen el algoritmo, dichas
funciones pueden estar sujetas a errores, hay que verificarlas.

                                             Detalle de las funciones

Seguramente se necesite una funcion que dado un array con una
determinada cantidad de cortes, nos devuelva que liston se ha elejido
y cual es el desperdicio

let seleccionarListon = cortes => {

}

cortes es un array, con lo cual la idea es dado un array seleccione
el liston con el menor desperdicio.
Aca el problema que veo es que no deja trabajar al randomizador de
una forma mas libre.
El randomizador va a trabajar con el concepto de fuerza bruta, es
decir explorar todas las posibilidades que haya dejandonos una
solución con menor desperdicio.

Aca me permito re-diseñar la funcion.

let aplicarCortes = (cortes, tamanioListon) => {
let sumaCortes = cortes.reduce((tot, c) => tot + c, 0)
if (sumaCortes <= tamanioListon) {
return {
cortesAplicados: cortes,
cortesRestantes: [],
quedanCortes: false
desperdicio: calcularDesperdicio(sumaCortes, tamanioListon)
}
}
}

Aca podemos ver dos cosas

1. Me saco de encima el problema mas simple que es que todos los
   cortes entran perfectamente en el liston.
2. agrego una funcion calcularDesperdicio que debo definirla a priori

let calcularDesperdicio = (sumaCortes, tamanioListon) => {
return Math.floor(1000 - Math.round(sumaCortes / tamanioListon \* 1000)) / 10
}

Lo que retorna calcular desperdicio es un porcentaje con un decimal

Ahora bien, volviendo a la funcion aplicarCortes, si la suma de los
cortes supera el tamaño del liston, hay que ir probando hasta ver
cuantos cortes entran.

let aplicarCortes = (cortes, tamanioListon) => {
let sumaCortes = cortes.reduce((tot, c) => tot + c, 0)
if (sumaCortes <= tamanioListon) {
return {
cortesAplicados: cortes,
cortesRestantes: [],
quedanCortes: false
desperdicio: calcularDesperdicio(sumaCortes, tamanioListon)
}
}

let totalConsumido = 0
let totalProyectado = 0
let salir = false

for (let idx = 0; salir === false; idx++) {
totalProyectado += cortes[idx]
if (totalProyectado > tamanioListon) {
return {
cortesAplicados: cortes.slice(0, idx-1),
cortesRestantes: cortes.slice(idx-1)
quedanCortes: true
desperdicio: calcularDesperdicio(totalConsumido,
tamanioListon)
}
}
totalConsumido = totalProyectado
}
}

El totalProyectado es lo que voy a tirarme a colocar en el liston, si
entra, se pasa a la variable totalConsumido si no entra, se toma
total consumido para calcular el desperdicio

                                              Testeo de las funciones

Cabe recordar que para testear las funciones hay que habilitar tres
pasos: A A A

Arrange - Acomodar los valores
Act - Ejecutar las funcion
Assert - Verificar el resultado

Primero vamos a testear con un array de cortes que entre en su
totalidad

Arrange
let cortes = [10, 20, 30]
Act
let resp = aplicarCortes(cortes, 60)
Assert resp.cortesAplicados equals [10, 20, 30]
Assert resp.cortesRestantes equals []
Assert resp.quedanCortes equals false
Assert resp.desperdicio equals 0

Testeo lo mismo pero con desperdicio de 2 cm

Arrange

let cortes = [10, 20, 30]
Act
let resp = aplicarCortes(cortes, 62)
Assert resp.cortesAplicados equals [10, 20, 30]
Assert resp.cortesRestantes equals []
Assert resp.quedanCortes equals false
Assert resp.desperdicio equals 3.2

Testeo para el caso que no alcancen los cortes

Arrange

let cortes = [10, 20, 30]
Act
let resp = aplicarCortes(cortes, 15)
Assert resp.cortesAplicados equals [10]
Assert resp.cortesRestantes equals [20, 30]
Assert resp.quedanCortes equals true
Assert resp.desperdicio equals 33.3

                    Aplicar cortes hasta encontrar la solucion optima

Antes de hablar de una solucion optima, es necesario plantear que es
una solucion.

Una solucion es un array de como se aplicarán los cortes en los cada
uno de los listones

ejemplo

estructura basica

{
cortes: [10, 4, 2],
liston: 30,
desperdicio: 46,7
}

{
cortes: [20, 14, 12],
liston: 50,
desperdicio: 8
}

Puesto en un array

let solucion = [{
cortes: [10, 4, 2],
liston: 30,
desperdicio: 46,7
},
{
cortes: [20, 14, 12],
liston: 50,
desperdicio: 8
}]

Vamos ahora a crear la funcion encontrar solucion

let encontrarSolucion = (cortes) => {
let solucion = []

    for (let continuar = true ;continuar;) {
        let liston = randomizarListon()
        let resp = aplicarCortes(cortes, liston)
        let itemSolucion = resp.map(z => {
            return {
                cortes: z.cortesAplicados,
                liston,
                desperdicio: z.desperdicio
            }
        })
        solucion.push(itemSolucion)
        continuar = resp.quedanCortes
    }

}

Hay que tener en cuenta que la funcion encontrarSolucion es una funcion
NO testeable, para que sea testeable, debemos encontrar una forma
de parametrizar los listones que vamos a utilizar

por ultimo, hay que hacer una funcion que corra durante un tiempo,
pero que por ahora no necesitamos a priori definirlo

let forEver = () => {
let mejorSolucion = []
let menorDesperdicio = 100

let strCortes = fs.readFileSync('/rutaDelArchivoCortes', 'utf-8')
let cortes = strCortes.split(' ')

for (;;) {
cortes = cortes.sort(Math.random() - 0.5)
let solucion = encontrarSolucion(cortes)
let desperdicioDeLaSolucion =
solucion.map(z => z.desperdicio)
.reduce((a, b) => a + b, 0)

      if (desperdicioDeLaSolucion < menorDesperdicio) {
          menorDesperdicio = desperdicioDeLaSolucion
          mejorSolucion = solucion
      }

}
}
