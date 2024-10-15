
lista_de_productos = []
lista_de_precios = []

while True:
    producto = input("Que producto queres agregar a la lista? ")
    if producto == "x":
        print("\n")
        break
    else:
        lista_de_productos.append(producto)

for i in lista_de_productos:
    precio = int(input(f"{i} que precio tiene este producto? "))
    lista_de_precios.append(precio)
print("\n")
for i in range(len(lista_de_productos)):
    print(f"El/la {lista_de_productos[i]} sale ${lista_de_precios[i]}")

print(f"El gasto total de todos los productos es de ${sum(lista_de_precios)}")