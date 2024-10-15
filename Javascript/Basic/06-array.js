
// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Facundo", "Pedrazzoli", "F.Pedrazzoli", 21, true]
myArray2 = new Array("Facundo", "Pedrazzoli", "F.Pedrazzoli", 21, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Facundo"
// myArray2[0] = "Pedrazzoli"
myArray2[1] = "F.Pedrazzoli"
myArray2[4] = "F.Pedrazzoli"

console.log(myArray2)

myArray = []
myArray[2] = "Facundo"
// myArray[0] = "Pedrazzoli"
myArray[1] = "F.Pedrazzoli"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Facundo")
myArray.push("Pedrazzoli")
myArray.push("F.Pedrazzoli")
myArray.push(21)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Facundo", "F.Pedrazzoli")
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray = ["Facundo", "Pedrazzoli", "F.Pedrazzoli", 21, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Facundo", "Pedrazzoli", "F.Pedrazzoli", 21, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)