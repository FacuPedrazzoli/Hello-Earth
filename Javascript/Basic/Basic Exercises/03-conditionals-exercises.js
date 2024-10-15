/* Ejercicios de condicionales
if/else/else if/ternaria

1. Imprime por consola tu nombre si una variable toma su valor

2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
   dependiendo de la edad 

6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

switch

8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

9. Usa un switch para hacer de nuevo el ejercicio 6

10. Usa un switch para hacer de nuevo el ejercicio 7
*/

// 1. Imprime por consola tu nombre si una variable toma su valor

let name = 'Mundo'

if (name === 'Mundo') {
      console.log(name)
   }

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = 'user'
let password = 'password'

if (user === 'user' && password === 'password') {
      console.log('Usuario y contraseña correctos')
   }

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = 0

if (number > 0) {
      console.log('El número es positivo')
   } else if (number < 0) {
      console.log('El número es negativo')
   } else {
      console.log('El número es cero')
   }

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 17

if (age >= 18) {
      console.log('Puede votar')
   } else {
      console.log(`No puede votar. Le faltan ${18 - age} años`)
   }

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable

let age2 = 20
let ageType = age2 >= 18 ? 'adulto' : 'menor'

console.log(ageType)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let month = 1
let season = ''

if (month === 1 || month === 2 || month === 3) {
   season = 'Verano'
} else if (month === 4 || month === 5 || month === 6) {
   season = 'Otoño'
} else if (month === 7 || month === 8 || month === 9) {
   season = 'Invierno'
} else if (month === 10 || month === 11 || month === 12) {
   season = 'Primavera'
} else {
   season = 'Mes incorrecto'
}
console.log(season)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let days = 0

if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    days = 31
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    days = 30
} else if (month === 2) {
      days = 28
   } else {
    days = 'Mes incorrecto'
}

console.log(days)

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = 'es'

switch (language) {
   case 'es':
      console.log('Hola')
      break
   case 'en':
      console.log('Hello')
      break
   case 'fr':
      console.log('Salut')
      break
   default:
      console.log('Idioma no soportado')
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let month2 = 1

switch (month2) {
   case 1:
   case 2:
   case 3:
      console.log('Verano')
      break
   case 4:
   case 5:
   case 6:
      console.log('Otoño')
      break
   case 7:
   case 8:
   case 9:
      console.log('Invierno')
      break;
   case 10:
   case 11:
   case 12:
      console.log('Primavera')
      break
   default:
      console.log('Mes incorrecto')
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let days2 = 0

switch (month) {
   case 1:
   case 3:
   case 5:
   case 7:
   case 8:
   case 10:
   case 12:
      days2 = 31
      break
   case 4:
   case 6:
   case 9:
   case 11:
      days2 = 30
      break
   case 2:
      days2 = 28
      break
   default:
      days2 = 'Mes incorrecto'
}

console.log(days2)