/* Ejericios de strings 
1. Concatena dos cadenas de texto

2. Muestra la longitud de una cadena de texto

3. Muestra el primer y último carácter de un string

4. Convierte a mayúsculas y minúsculas un string

5. Crea una cadena de texto en varias líneas

6. Interpola el valor de una variable en un string

7. Reemplaza todos los espacios en blanco de un string por guiones

8. Comprueba si una cadena de texto contiene una palabra concreta

9. Comprueba si dos strings son iguales

10. Comprueba si dos strings tienen la misma longitud
*/

// 1. Concatena dos cadenas de texto

let string1 = 'Hola'
let string2 = 'Mundo'

console.log(string1 + ' ' + string2)

// 2. Muestra la longitud de una cadena de texto

let string3 = 'Hola Mundo'

console.log(string3.length)

// 3. Muestra el primer y último carácter de un string

console.log(string3[0])
console.log(string3[string3.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(string3.toUpperCase())
console.log(string3.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let string4 = `Hola
Mundo`

console.log(string4)

// 6. Interpola el valor de una variable en un string

let name = 'Mundo'

console.log(`Hola ${name}`)
console.log('Hola ' + name)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let string5 = 'Hola Mundo'

console.log(string5.replace(/ /g, '-'))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(string5.includes('Mundo'))

// 9. Comprueba si dos strings son iguales

let string6 = 'Hola Mundo'

console.log(string5 === string6)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(string5.length === string6.length)