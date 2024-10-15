
// Strings (cadenas de texto)

// Concatenación

let myName = "Facundo"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[11])

// Métodos comunes

console.log(greeting.toUpperCase())                // Mayúsculas
console.log(greeting.toLowerCase())                // Minúsculas
console.log(greeting.indexOf("Hola"))              // Índice
console.log(greeting.indexOf("Facundo"))
console.log(greeting.indexOf("F.Pedrazzoli"))
console.log(greeting.includes("Hola"))             // Incluye
console.log(greeting.includes("Facundo"))
console.log(greeting.includes("F.Pedrazzoli"))
console.log(greeting.slice(0, 10))                 // Sección
console.log(greeting.replace("Facundo", "F.Pedrazzoli")) // Reemplazo

// Template literals (plantillas literales)

// Strings en varias líneas
let message = `Hola, este
es el curso
de MoureDev de
JavaScript`
console.log(message)

// Interpolación de valores
let email = "pedrazzolifacundo@gmail.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)