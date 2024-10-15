
// Set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Facundo", "Pedrazzoli", "F.Pedrazzoli", 21, true, "pedrazzolifacundo@gmail.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://FacundoPedrazzoli.dev")

console.log(mySet)

mySet.delete("https://FacundoPedrazzoli.dev")

console.log(mySet)

console.log(mySet.delete("Facundo"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Facundo"))
console.log(mySet.has("Pedrazzoli"))

// size

console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("pedrazzolifacundo@gmail.com")
mySet.add("pedrazzolifacundo@gmail.com")
mySet.add("pedrazzolifacundo@gmail.com")
mySet.add("pedrazzolifacundo@gmail.com")
console.log(mySet)