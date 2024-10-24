import express from 'express'
const path = require('path');
import datosRouter  from './Router/datosRouter'
import calculosRouter from './Router/calculosRouter';
import inflacionRouter from './Router/inflacionRouter';
import cortesRouter from './Router/cortesRouter';

export default () => {

    console.log('Levantando servidor HTTP')
    let app = express()

    app.use(express.json());
    app.use(express.static(
        path.join(__dirname, '../../Frontend')));

    app.use('/api/datos', datosRouter)
    app.use('/api/calculos', calculosRouter)
    app.use('/api/inflacion', inflacionRouter)
    app.use('/api/cortes', cortesRouter)
    

    app.get("/hola", (req, res) => {
        res.send("hola").end()
    })

    app.listen(80, () => {
        console.log('escuchando puerto 80')
    })

    /*
    logger.info('levantando express')
    
    

    // app.use(express.json());
    // app.use('/api/login', loginMiddleware)
    app.use('/api/datos', datosRouter)
    // app.use('/api/alumno', alumnoRouter)
    // app.use(autenticacionRouter())

    
    */
}