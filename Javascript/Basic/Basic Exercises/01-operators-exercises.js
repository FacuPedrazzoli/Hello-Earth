/*Ejercicios de operadores
1. Crea una variable para cada operación aritmética

2. Crea una variable para cada tipo de operación de asignación,
    que haga uso de las variables utilizadas para las operaciones aritméticas

3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

5. Utiliza el operador lógico and

6. Utiliza el operador lógico or

7. Combina ambos operadores lógicos

8. Añade alguna negación

9. Utiliza el operador ternario

10. Combina operadores aritméticos, de comparáción y lógicas
*/

// 1. Crea una variable para cada operación aritmética

let sum = 5 + 5
let subtraction = 10 - 5
let multiplication = 5 * 5
let division = 10 / 2
let module = 10 % 3

// 2. Crea una variable para cada tipo de operación de asignación,

let sumAssign = sum += 5
let subtractionAssign = subtraction -= 5
let multiplicationAssign = multiplication *= 5
let divisionAssign = division /= 2
let moduleAssign = module %= 3

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

console.log(5 > 3)
console.log(5 >= 5)
console.log(5 < 10)
console.log(5 <= 5)
console.log(5 === 5)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 < 3)
console.log(5 <= 4)
console.log(5 > 10)
console.log(5 >= 6)
console.log(5 === 6)

// 5. Utiliza el operador lógico and

console.log(5 > 3 && 5 < 10)

// 6. Utiliza el operador lógico or

console.log(5 > 3 || 5 < 10)

// 7. Combina ambos operadores lógicos

console.log(5 > 3 && 5 < 10 || 5 === 5)

// 8. Añade alguna negación

console.log(!(5 > 3 && 5 < 10 || 5 === 5))

// 9. Utiliza el operador ternario

let ternary = 5 > 3 ? 'Verdadero' : 'Falso'

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(5 + 5 > 3 && 5 < 10 || 5 === 5)