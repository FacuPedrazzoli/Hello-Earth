
// Objetos

// Sintaxis

let person = {
    name: "Facundo",
    age: 37,
    alias: "F.Pedrazzoli"
}

// Acceso a propiedades

// Notación punto
console.log(person.name)

// Notación de corchetes
console.log(person["name"])

// Modificación de propiedades

person.name = "Facundo Pedrazzoli"
console.log(person.name)

console.log(typeof person.age)
person.age = "21"
console.log(person.age)
console.log(typeof person.age)

// Eliminación de propiedades

delete person.age

console.log(person)

// Nueva propiedad

person.email = "pedrazzolifacundo@gmail.com"
person["age"] = 21

console.log(person)

// Métodos (funciones)

let person2 = {
    name: "Facundo",
    age: 37,
    alias: "F.Pedrazzoli",
    walk: function () {
        console.log("La persona camina.")
    }
}
person2.walk()

// Anidación de objetos

let person3 = {
    name: "Facundo",
    age: 37,
    alias: "F.Pedrazzoli",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 1,
        work: function () {
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    }
}

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// Igualdad de objetos

let person4 = {
    name: "Facundo Pedrazzoli",
    alias: "F.Pedrazzoli",
    email: "pedrazzolifacundo@gmail.com",
    age: 21
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

// Iteración

for (let key in person4) {
    console.log(key + ": " + person4[key])
}

// Funciones como objetos

function Person(name, age) { // Debería ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person("Facundo", 21)
console.log(person5)
console.log(person5.name)

console.log(typeof person5)
console.log(typeof person4)