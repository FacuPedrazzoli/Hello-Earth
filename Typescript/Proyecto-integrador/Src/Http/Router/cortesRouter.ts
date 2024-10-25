import express from 'express'
import { forEver } from '../../Cortes-liston/main'

export default express.Router()    
    .post('/liston', async (request, response) => {
        console.log(request.body)

        let solucion = forEver(request.body.cortes)

        try {
            response            
            .status(200)
            .send(JSON.stringify({tuSolucion:solucion}))
        } catch(err) {
            response            
            .status(500)
            .send()
        }
    })