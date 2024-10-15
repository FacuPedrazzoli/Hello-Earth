

// if, else if, else

// if (si)

let age = 21

if (age == 21) {
    console.log("La edad es 21")
}

// else (si no)

if (age == 21) {
    console.log("La edad es 21")
} else {
    console.log("La edad no es 21")
}

// else if (si no, si)

if (age == 21) {
    console.log("La edad es 21")
} else if (age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 21 ni es menor de edad")
}

// Operador ternario

const message = age == 21 ? "La edad es 21" : "La edad no es 21"
console.log(message)

// switch

let day = 3
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Número de día incorrecto"
}

console.log(dayName)