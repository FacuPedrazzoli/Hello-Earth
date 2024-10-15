
### Dictionaries ###

my_dict = dict()
my_other_dict = {}

print(type(my_dict))
print(type(my_other_dict))

# Definiendo diccionarios ("Clave" : "Valor")

my_other_dict = {"name" : "Facundo","surname" : "Pedrazzoli","Age" : 21, 1 : "Python"}

my_dict = {"name" : "Facundo",
           "surname" : "Pedrazzoli",
           "Age" : 21, 
           "Lenguage" : {"Python","Html","Css"}, # Podemos poner distintos datos dentro de un diccionario (Este es un set)
           1 : "1.65"
}

print(my_other_dict)
print(my_dict)
print(type(my_dict["Lenguage"]))

print(len(my_other_dict))
print(len(my_dict))

# Búsqueda

print(my_dict[1])
print(my_dict["name"])

print(my_dict["name"])

# Actualización

my_dict["name"] = "Pepe"
print(my_dict["name"])
my_dict["name"] = "Facundo"

#print(my_dict["1"]) KeyError : "1" esto da error por que pusimos un string como clave pero nuestra clave es un int
print(my_dict[1])

# insercion

my_dict["Calle"] = "Av. Regimiento patricios 1209"
print(my_dict)

# Eliminando datos del dict

del my_dict["Calle"]
print(my_dict)

print("surname" in my_dict) # Para comprobar si esta el dato tenes que poner el key no el valor
print("Pedrazzoli" in my_dict)

# Operaciones

print(my_dict.items())
print(my_dict.keys())
print(my_dict.values())


my_list = ["Nombre", 1, "Piso"]

my_new_dict = dict.fromkeys((my_list))
print(my_new_dict)
my_new_dict = dict.fromkeys(("Nombre", 1, "Piso"))
print(my_new_dict)
my_new_dict = dict.fromkeys(my_dict)
print(my_new_dict)
my_new_dict = dict.fromkeys(my_dict, ("F.Pedrazzoli"))
print(my_new_dict)

print(list(my_new_dict))
print(tuple(my_new_dict))
print(set(my_new_dict))