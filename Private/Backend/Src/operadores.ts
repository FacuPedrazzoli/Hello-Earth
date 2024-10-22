// Tipos de variables
let num1: number = 10;
let num2: number = 5;

// Suma
export const suma = (a: number, b: number): number => a + b;

// Resta
export const resta = (a: number, b: number): number => a - b;

// Multiplicación
export const multiplicacion = (a: number, b: number): number => a * b;

// División
export const division = (a: number, b: number): number => {
    if (b === 0) {
        throw new Error('No se puede dividir por cero');
    }
    return a / b;
};

// Módulo (resto)
export const modulo = (a: number, b: number): number => a % b;

// Comparar números
export const compararNumeros = (a: number, b: number): string => {
    if (a > b) {
        return `${a} es mayor que ${b}`;
    } else if (a < b) {
        return `${a} es menor que ${b}`;
    } else {
        return `${a} es igual a ${b}`;
    }
};

// Operadores lógicos
export const esMayorYPositivo = (a: number, b: number): boolean => a > b && a > 0;

export const esCeroONegativo = (a: number): boolean => a === 0 || a < 0;

// Operadores de asignación
export const usarOperadoresDeAsignacion = (): number => {
    let valor: number = 10;
    valor += 5; // valor = valor + 5
    valor -= 3; // valor = valor - 3
    valor *= 2; // valor = valor * 2
    valor /= 4; // valor = valor / 4
    valor %= 5; // valor = valor % 5
    return valor; // Regresa el valor final tras todas las operaciones
};

// Ejecución de cálculos
export const ejecutarCalculos = (): void => {
    console.log('Suma:', suma(num1, num2));
    console.log('Resta:', resta(num1, num2));
    console.log('Multiplicación:', multiplicacion(num1, num2));
    console.log('División:', division(num1, num2));
    console.log('Módulo:', modulo(num1, num2));

    // Comparaciones
    console.log(compararNumeros(num1, num2));

    // Operadores lógicos
    console.log('Es mayor y positivo:', esMayorYPositivo(num1, num2));
    console.log('Es cero o negativo:', esCeroONegativo(num2));

    // Operadores de asignación
    console.log('Resultado de operadores de asignación:', usarOperadoresDeAsignacion());
};
