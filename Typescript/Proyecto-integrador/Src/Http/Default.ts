import express from 'express'
const path = require('path');
import datosRouter from './Router/datosRouter'
import calculosRouter from './Router/calculosRouter';
import inflacionRouter from './Router/inflacionRouter';

export default () => {

    console.log('Levantando servidor HTTP')
    let app = express()

    app.use(express.json());
app.use(express.static(
        path.join(__dirname, '../../Frontend')));

    app.use('/api/datos', datosRouter)
    app.use('/api/calculos', calculosRouter)
    app.use('/api/inflacion', inflacionRouter)

    app.get("/hola", (req, res) => {
        res.send("Hola como va?").end()
    })

    app.listen(80, () => {
        console.log('escuchando puerto 80')
})
}