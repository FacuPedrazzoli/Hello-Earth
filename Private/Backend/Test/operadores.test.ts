import { suma, resta, multiplicacion, division, modulo } from '../Src/operadores';

test('suma de 10 y 5 debe ser 15', () => {
    expect(suma(10, 5)).toBe(15);
});

test('resta de 10 y 5 debe ser 5', () => {
    expect(resta(10, 5)).toBe(5);
});

test('multiplicación de 10 y 5 debe ser 50', () => {
    expect(multiplicacion(10, 5)).toBe(50);
});

test('división de 10 entre 5 debe ser 2', () => {
    expect(division(10, 5)).toBe(2);
});

test('división entre 0 debe lanzar error', () => {
    expect(() => division(10, 0)).toThrow('No se puede dividir por cero');
});

test('módulo de 10 y 5 debe ser 0', () => {
    expect(modulo(10, 5)).toBe(0);
});
