// main.test.ts
import { aplicarCortes, ItemSolucion, calcularDesperdicio, encontrarSolucion, obtenerDataTxt } from '../src/Cortes-liston/main';
import fs from 'fs';

// Mock de fs.readFileSync
jest.mock('fs');

describe('Funciones de main.ts', () => {
    it('calcularDesperdicio', () => {

        const sumaCortes = 500;
        const tamañoListon = 1000;
        const desperdicio = calcularDesperdicio(sumaCortes, tamañoListon);

        expect(desperdicio).toBe(50);
    });

    it('aplicarCortes con sumaCortes <= tamañoListon', () => {

        const cortes = [100, 200, 300];
        const tamañoListon = 1000;
        const resultado = aplicarCortes(cortes, tamañoListon);

        expect(resultado.cortesAplicados).toEqual(cortes);
        expect(resultado.cortesRestantes).toEqual([]);
        expect(resultado.quedanCortes).toBe(false);
        expect(resultado.desperdicio).toBe(40);
    });

    it('aplicarCortes con sumaCortes > tamañoListon', () => {

        const cortes = [500, 600, 700];
        const tamañoListon = 1000;
        const resultado = aplicarCortes(cortes, tamañoListon);

        expect(resultado.cortesAplicados).toEqual([500]);
        expect(resultado.cortesRestantes).toEqual([600, 700]);
        expect(resultado.quedanCortes).toBe(true);
        expect(resultado.desperdicio).toBe(50);
    });

    it('encontrarSolucion', () => {

        const cortes = [100, 200, 300];
        const solucion = encontrarSolucion(cortes);

        expect(solucion.length).toBeGreaterThan(0);
        solucion.forEach((item: ItemSolucion) => {
            expect(item.cortes.length).toBeGreaterThan(0);
            expect(item.liston).toBeGreaterThan(0);
            expect(item.desperdicio).toBeGreaterThanOrEqual(0);
        });
    });

    it('obtenerDataTxt', () => {
        
        const mockPath = 'mockPath.txt';
        const mockData = '100 200 300';
        (fs.readFileSync as jest.Mock).mockReturnValue(mockData);
        const data = obtenerDataTxt(mockPath);

        expect(data).toEqual(['100', '200', '300']);
    });
});