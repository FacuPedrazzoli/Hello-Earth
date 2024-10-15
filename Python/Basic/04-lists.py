### listas ###

my_list = list()
my_other_list = []

print(type(my_list))
print(type(my_other_list))

print(len(my_list))

my_list = [21,24,32,17,28,32,22]
print(my_list)
print(len(my_list))

my_other_list = [21,1.65, "Facundo", "Pedrazzoli",]

# Acceso a elementos y búsqueda

print(my_other_list[0])
print(my_other_list[1])
print(my_other_list[-1])
print(my_other_list[-4])
print(my_list.count(32))
#print(my_other_list[4])  IndexError
#print(my_other_list[-5]) IndexError

# Desempaquetado

age, height, name, surname = my_other_list
print(name)

name, height, age, surname = my_other_list[2], my_other_list[1], my_other_list[0], my_other_list[3] # Formato valido pero no recomendable
print(age)

# Concatenación

print(my_list + my_other_list)
#print(my_list - my_other_list) TypeError

# Creación, inserción, actualización y eliminación

my_other_list.append("F.Pedrazzoli")
print(my_other_list)

my_other_list.insert(1,"Naranja")
print(my_other_list)

my_other_list[1] = "Negro"
print(my_other_list)

my_other_list.remove("Negro")
print(my_other_list)
my_list.remove(32)
print(my_list)

my_pop_element = my_list.pop(2)
print(my_pop_element)
print(my_list)

print(my_other_list.index("Facundo"))

del my_list[2]
print(my_list)

# Operaciones con listas

my_new_list = my_list.copy()

my_list.clear()
print(my_list)
print(my_new_list)

my_new_list.reverse()
print(my_new_list)

my_new_list.sort()
print(my_new_list)

# Sublistas

print(my_new_list[1:3])

# Cambio de tipo

my_new_list = my_list.copy()
my_list = "Hola Python"
print(my_list)
print(type(my_list))