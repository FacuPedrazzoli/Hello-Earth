
### Variables ###

my_string_variable = "My string variable"
print(my_string_variable)

my_int_variable = 8
print(my_int_variable)

# Convertimos el int en un string (osea en una cadena de texto.)

my_int_to_str_variable = str(my_int_variable)
print(my_int_to_str_variable)
print(type(my_int_to_str_variable))

my_bool_variable = True
print(my_bool_variable)

# Concatenacion de variables

print(my_string_variable, my_int_variable, my_bool_variable)
print("Este es el valor de : ",my_bool_variable)

# Algunas funciones del sistema

print(len(my_string_variable))

# Variables en una sola linea

name,surname,alias,age = "Facundo", "Pedrazzoli", "Facu", 21
print(f"Me llamo {name} {surname} pero me dicen {alias} y tengo {age}")

# Inputs
"""
name = input("Cual es tu nombre? ")
age = int(input("Que edad tenes? "))

print(name)
print(age)
"""

# Cambiando su tipo

name = 21
age = "Facundo"

# Forzandole un tipo a una variable? (NOP)

address : str = "Mi direccion"
address = 21
address = 1.5
address = False

print(type(address))
