import express from 'express'

function gaussian(x, mean, standardDeviation) {
    const exponent = -((x - mean) ** 2) / (2 * standardDeviation ** 2);
    const coefficient = 1 / (standardDeviation * Math.sqrt(2 * Math.PI));
    return coefficient * Math.exp(exponent);
}

export default express.Router()
    .use('', (request, response, next) => {
        console.log('Pasando por el middleware de hola')
        next()
    })
    .get('/ej1', async (request, response) => {
        let datos: number[] = [2, 3, 9, 88].sort((a, b) => Math.random() - 0.5)
        try {
            response
                .status(200)
                .send(datos)
        }
        catch (err) {
            response
                .status(500)
                .send()
        }
    })
    .post('/recibircortes', async (request, response) => {
        console.log(request.body)
        let objListones = { listones: [300, 420, 300] }

        try {
            response
                .status(200)
                .send(JSON.stringify(objListones))
        }
        catch (err) {
            response
                .status(500)
                .send()
        }
    })