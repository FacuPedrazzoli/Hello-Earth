/* Ejericios de estructuras de datos
1. Crea un array que almacene cinco animales

2. Añade dos más. Uno al principio y otro al final

3. Elimina el que se encuentra en tercera posición

4. Crea un set que almacene cinco libros

5. Añade dos más. Uno de ellos repetido

6. Elimina uno concreto a tu elección

7. Crea un mapa que asocie el número del mes a su nombre

8. Comprueba si el mes número 5 existe en el map e imprime su valor

9. Añade al mapa una clave con un array que almacene los meses de verano

10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
*/

// 1. Crea un array que almacene cinco animales

let animals = ['perro', 'gato', 'pez', 'pájaro', 'ratón']

// 2. Añade dos más. Uno al principio y otro al final

animals.unshift('tigre')
animals.push('elefante')

// 3. Elimina el que se encuentra en tercera posición

animals.splice(2, 1)

// 4. Crea un set que almacene cinco libros

let books = new Set(['El Quijote', 'Don Juan Tenorio', 'La Celestina', 'El Lazarillo de Tormes', 'La Regenta'])

// 5. Añade dos más. Uno de ellos repetido

books.add('El Quijote')
books.add('El Conde Lucanor')

// 6. Elimina uno concreto a tu elección

books.delete('Don Juan Tenorio')

// 7. Crea un mapa que asocie el número del mes a su nombre

let months = new Map([
    ['1', 'Enero'],
    ['2', 'Febrero'],
    ['3', 'Marzo'],
    ['4', 'Abril'],
    ['5', 'Mayo'],
    ['6', 'Junio'],
    ['7', 'Julio'],
    ['8', 'Agosto'],
    ['9', 'Septiembre'],
    ['10', 'Octubre'],
    ['11', 'Noviembre'],
    ['12', 'Diciembre'],
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if (months.has('5')) {
    console.log(months.get('5'))
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

months.set('Verano', ['Junio', 'Julio', 'Agosto'])

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let array = ['uno', 'dos', 'tres', 'cuatro', 'cinco']
let set = new Set(array)
let map = new Map([['set', set]])