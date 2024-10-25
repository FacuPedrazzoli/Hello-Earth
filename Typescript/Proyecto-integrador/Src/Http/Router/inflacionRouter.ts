import express from 'express'

export default express.Router()    
    .post('/ipc', async (request, response) => {
        console.log(request.body)

        let total = request.body.xs.reduce((zacum, z) => {
            let i = z / 100
            return zacum += (zacum * i)
        }, 100)

        total = total - 100
        total = parseFloat(total.toFixed(2))

        try {
            response            
            .status(200)
            .send(JSON.stringify({ipcTrimestral:total}))
        }
        catch(err) {
            response            
            .status(500)
            .send()
        }
    })