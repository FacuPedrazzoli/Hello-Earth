import random

def palabra_elegida():
    palabras = ["casa","perro","gato","árbol","computadora","libro","mesa","silla","coche","tiempo","número","color","ciudad","persona","objeto","trabajo","dinero","profesor","estudiante","información","música","familia","amigo","internet","teléfono","programa","proyecto","documento","lugar","evento","concepto","tecnología","solución","respuesta","pregunta","idea","hecho","detalle","opción","naturaleza","aspecto","circunstancia","elemento","desarrollo","acción","movimiento","creación","realidad","circuito","material","solución","nivel","proceso","característica","principio","resultado","situación","producto","organización","tendencia","valor","interés","servicio","atención","forma","cambio","sistema","estrategia","seguridad","novedad","funcionalidad","representación","estructura","definición","función","efecto","impacto","beneficio","ventaja","desventaja","responsabilidad","compromiso","relación","comunicación","colaboración","conexión","nube","configuración","administración","ejecución","evaluación","objetivo","requisito","documento","informe","revisión","implementación","coordinación","gestión","administración","técnica","operación","documentación","control","calidad","progreso","plan","equipo","recurso","fase","estrategia","herramienta","estrategia","desafío","experiencia","conocimiento","aprendizaje","conclusión","investigación","estudio","análisis","evaluación","información","reporte","resultados","eficiencia","rendimiento","objetivo","requisito","usuario","configuración","ajuste","personalización","extensión","mejora","opción","característica","funcionalidad","capacidad","interfaz","diseño","aplicación","componente","tarea","actividad","operación","procedimiento","error","excepción","problema","solución","novedad","mejora","versión","cambio","actualización","documentación","información","contenido","recurso","base de datos","archivo","directorio","ubicación","nombre","extensión","formato","repositorio","control","versión","código","fuente","lenguaje","sintaxis","compilación","depuración","ejecución","compilador","intérprete","script","log","registro","mensaje","excepción","debug","flujo","proceso","progreso","revisión","comentario","documentación","función","método","clase","objeto","herencia","polimorfismo","encapsulamiento","estructura","datos","tipo","variable","constante","operador","expresión","condición","bucle","iteración","recursión","referencia","puntero","memoria","algoritmo","eficiencia","rendimiento","tiempo","complejidad","rendimiento","ejecución","proceso","salida","archivo","lectura","escritura","acceso","usuario","contraseña","autenticación","seguridad","ataque","vulnerabilidad","registro","control","privacidad","datos","protección","firewall","criptografía","comunicación","conexión","red","enrutador","dirección","protocolo","internet","navegador","sitio","web","página","contenido","hipervínculo","navegación","cliente","servidor","nube","almacenamiento","virtualización","infraestructura","escalabilidad","disponibilidad","escalabilidad", "redundancia", "integridad", "transacción", "cifrado", "comunicación", "aplicación", "interfaz",]
    return random.choice(palabras)

def Mostrar_progreso(palabra,letras_adivinadas):
    progreso = ""
    for letra in palabra:
        if letra in letras_adivinadas:
            progreso += letra
        else:
            progreso += ""
    return progreso

def Juego_del_ahorcado():
    palabra_a_adivinar = palabra_elegida()
    letras_adivinadas = []
    intentos_maximos = 6
    
    print("Hola bienvenido al juego del ahorcado.")
    print("Tenes 6 intentos te aviso por si no sabes como se juega al ahorcado.")
    
    while True:
        progreso = Mostrar_progreso(palabra_a_adivinar,letras_adivinadas)
        letra_del_usuario = input("Ingresa tu letra: ")
        for letra in palabra_a_adivinar:
            if letra_del_usuario == letra:
                pass            