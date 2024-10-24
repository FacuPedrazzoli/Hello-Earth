import express from 'express'

export default express.Router()
    .post('/ipc', async (request, response) => {
        
        console.log(request.body)

        let total = request.body.xs.reduce((acumulado, acumuador
        ) => {
            let i = acumuador / 100
            return acumulado += (acumulado * i)
        }, 100)

        total = total - 100
        total = parseFloat(total.toFixed(2))

        try {
            response
                .status(200)
                .send(JSON.stringify({ipcTrimestral : total}));
        }
        catch (err) {
            response
                .status(500)
                .send()
        }
    })