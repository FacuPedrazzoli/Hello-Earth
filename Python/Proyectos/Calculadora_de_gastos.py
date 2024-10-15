
def gastos_casa():
    # Tenemos las variables de los gastos
    gasto = ()
    gastos = []

    print("Bienvenido a tu lista de gastos\n")

    # Bucle para ingresar todos los gastos necesarios cuando se quiera salir del bucle presione 0
    while gasto != 0:
        gasto = int(input("Ingresa tus gastos: "))
        gastos.append(gasto)

    # Se elimina el 0 de la lista de gastos
    del gastos[-1]

    # Ingresa todos los elementos de la lista
    print(f"\nEsta es la lista de tus gastos: {gastos}\n")

    # Suma todos los elementos para tener un total
    gastos_totales = sum(gastos)

    # Usamos la funcion equivalente() para dividir
    equivalente_total = gastos_totales / 4

    # Muestra el total y el equivalente que le corresponde a cada uno
    print(f"El total a pagar es {gastos_totales} y el equivalente es {equivalente_total} cada uno.\n")
    
gastos_casa()