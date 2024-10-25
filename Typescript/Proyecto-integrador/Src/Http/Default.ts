import express from 'express'
const path = require('path');
import datosRouter  from './Router/datosRouter'
import calculosRouter from './Router/calculosRouter';

export default () => {

    console.log('Levantando servidor HTTP')
    let app = express()

    app.use(express.json());
    app.use(express.static(
        path.join(__dirname, '../../Frontend')));

    app.use('/api/datos', datosRouter)
    app.use('/api/calculos', calculosRouter)

    app.get("/hola", (req, res) => {
        res.send("hola").end()
    })

    app.listen(80, () => {
        console.log('escuchando puerto 80')
    })
}