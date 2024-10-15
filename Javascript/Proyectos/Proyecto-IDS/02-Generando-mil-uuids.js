let genUsu = require('./01-Uuids.js')
let fs = require('fs')

const PATH_ARCHIVO_OUTPUT = "C:\\HELLO-JAVASCRIPT\\Proyectos\\Proyecto-IDS\\01-Uuids.js"

let escribirArchivo = (o) => {    
    fs.appendFileSync(PATH_ARCHIVO_OUTPUT, 
        JSON.stringify(o, null, 4), 'utf-8')
}

let generarMilUsuarios = () => {
    for (let idx=0; idx < 5; idx++) {
        console.log(idx)        
        escribirArchivo(genUsu())
    }
}

// module.exports = generarMilUsuarios
module.exports = () => {
    // escribirArchivo({nombre:"ignacio"}) 
    generarMilUsuarios()
}