let genUsu = require('./01-Uuids.js')
let fs = require('fs')
let path = require('path')

// Constantes que definen las rutas de las carpetas de entrada y salida
const CARPETA_ARCHIVOS_INPUT = "C:\\HELLO-JAVASCRIPT\\Proyectos\\Proyecto-IDS\\Guardando-Todo\\input"
const CARPETA_ARCHIVOS_OUTPUT = "C:\\HELLO-JAVASCRIPT\\Proyectos\\Proyecto-IDS\\Guardando-Todo\\output"

// Crear la carpeta de entrada si no existe
if (!fs.existsSync(CARPETA_ARCHIVOS_INPUT)) {
    fs.mkdirSync(CARPETA_ARCHIVOS_INPUT, { recursive: true })
}

// Crear la carpeta de salida si no existe
if (!fs.existsSync(CARPETA_ARCHIVOS_OUTPUT)) {
    fs.mkdirSync(CARPETA_ARCHIVOS_OUTPUT, { recursive: true })
}

// Función para generar mil usuarios
let generarMilUsuarios = () => {
    let arrUsuarios = []
    // Genera 5 usuarios (debería ser 1000 según el nombre de la función)
    for (let idx = 1; idx <= 5; idx++) {
        arrUsuarios.push(genUsu())
    }
    return arrUsuarios
}

// Función para convertir un objeto a una cadena JSON con formato
let convertiraJson_pura = (obj) => {
    return JSON.stringify(obj, null, 4)
}

// Función para obtener la ruta del archivo de entrada basado en el ID del usuario
let obtenerPathInput = (id) => {
    return path.join(CARPETA_ARCHIVOS_INPUT, `${id}.json`)
}

// Función para obtener la ruta del archivo de salida basado en el ID del usuario
let obtenerPathOutput = (id) => {
    return path.join(CARPETA_ARCHIVOS_OUTPUT, `${id}.json`)
}

// Función para guardar un archivo de entrada con los datos del usuario
let guardarArchivoInput = (usu) => {
    console.log(usu)
    // Convierte el objeto usuario a una cadena JSON
    let strUsu = convertiraJson_pura(usu)
    // Escribe el archivo en la ruta de entrada con el ID del usuario y el sufijo "-PROCESADO"
    fs.writeFileSync(obtenerPathInput([usu.id,"-PROCESADO"].join("")), strUsu, 'utf8')
}

// Función para guardar un arreglo de usuarios en archivos de entrada
let guardarArrUsuariosInput = (usuarios) => {
    // Iterando sobre cada usuario y guarda su archivo de entrada
    for (let item of usuarios) {
        guardarArchivoInput(item)
    }
}

// Función para visualizar los datos de los usuarios en la consola
let visualizarUsuarios = (usuarios) => {
    // Iterando sobre cada usuario y muestra su información en formato JSON en la consola
    for (let item of usuarios) {
        console.log(convertiraJson_pura(item))
    }
}

// Función para leer todos los archivos de usuarios desde la carpeta de entrada
let generandoLosIdsTambienAgragandoElImpuestos = () => {
    // Lee todos los nombres de archivos en la carpeta de entrada
    let archivos = fs.readdirSync(CARPETA_ARCHIVOS_INPUT)
    // Iterando sobre cada archivo
    for (let archivo of archivos) {
        let archivoPath = path.join(CARPETA_ARCHIVOS_INPUT, archivo)
        // Verifica si el archivo es un archivo regular
        if (fs.lstatSync(archivoPath).isFile()) {
            // Lee el contenido del archivo
            let data = fs.readFileSync(archivoPath, 'utf8')
            // Convierte el contenido JSON a un objeto usuario
            let usuario = JSON.parse(data)
            // Calcula el impuesto del usuario y lo agrega al objeto
            usuario.impuesto = usuario.amount * 0.05
            // Escribe el archivo de salida con los datos del usuario actualizados
            fs.writeFileSync(obtenerPathOutput(usuario.id), convertiraJson_pura(usuario), 'utf8')
        }
    }
}

// Exporta una función que genera mil usuarios, guarda sus archivos de entrada y luego lee todos los usuarios
module.exports = () => {
    let xs = generarMilUsuarios()
    guardarArrUsuariosInput(xs)
    generandoLosIdsTambienAgragandoElImpuestos()
}