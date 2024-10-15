
### Loops ###

# While

my_condition = 0

while my_condition < 10:
    print(my_condition)
    my_condition += 2
else:  # Es opcional
    print("Mi condicion es mayor o igual que 10.")


print("La ejecucion continua.")


while my_condition < 20:
    my_condition += 1
    if my_condition == 15:
        print("Se detiene el loop.")
        break
    print(my_condition)

print("Mi condicion es menor que 20.\n")

# For

my_list = [21, 24, 62, 52, 30, 30, 17]

for element in my_list:
    print(element)

print("\n")

my_tuple = (21, 1.65, "Facundo", "Pedrazzoli")

for element in my_tuple:
    print(element)

print("\n")

my_set = {"Facundo", "Pedrazzoli", 21}

for element in my_set:
    print(element)

print("\n")

my_dict = {"Nombre" : "Facundo", "Apellido" : "Pedrazzoli", "Edad" : 21, 1 : "Python"}

for element in my_dict:
    print(element)
    if element == "Edad":
        break
else:
    print("El loop for para diccionario ha finalizado.")

print("La ejecucion continua.")

for element in my_dict:
    print(element)
    if element == "Edad":
        continue
else:
    print("El loop for para diccionario ha finalizado.")