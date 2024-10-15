
### Tuplas ###

my_tuple = tuple()
my_other_tuple = ()

my_tuple = (21, 1.65, "Facundo", "Pedrazzoli","Facundo")
my_other_tuple = (21,22,24)
print(my_tuple)
print(type(my_tuple))

# Acceso a elementos y búsqueda

print(my_tuple[0])
print(my_tuple[-1])
#print(my_tuple[4])  IndexError
#print(my_tuple[-6]) IndexError

print(my_tuple.count("Facundo"))
print(my_tuple.index("Facundo"))
print(my_tuple.index("Pedrazzoli"))

#my_tuple[] = 1.70 TypeError (Las tuplas son inmutables)

# Concatenacion

my_sum_tuple = my_tuple + my_other_tuple
print(my_sum_tuple)

# Subtuplas

print(my_sum_tuple[3:6])

# Tupla mutable con conversion a lista

my_tuple = list(my_tuple)
print(type(my_tuple))

my_tuple[4] = "F.Pedrazzoli"
my_tuple.insert(1,"Naranja")
my_tuple = tuple(my_tuple)
print(my_tuple)
print(type(my_tuple))

# Eliminacion

del my_tuple[2] #TypeError: 'tuple' object doesn't support item deletion

del my_tuple #Esto elimina perma la tupla
#print(my_tuple) NameError: name 'my_tuple' is no defined 