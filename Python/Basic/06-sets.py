
### Sets ###

my_set = set()
my_other_set = {}

print(type(my_set))
print(type(my_other_set)) # Inicialmente es un diccionario

my_other_set = {"Facundo", "Pedrazzoli", 21} # Depende de la forma de ingresarle la informacion es un dict o un set
print(type(my_other_set))

print(len(my_other_set))

# Inserción

my_other_set.add("F.Pedrazzoli")

print(my_other_set) # Un set no es una estructura ordenada

my_other_set.add("F.Pedrazzoli") # Un set no admite datos repetidos

print(my_other_set)

# Búsqueda

print("Pedrazzoli" in my_other_set)
print("Pedrazoli" in my_other_set)

# Operaciones

my_other_set.remove(21)
print(my_other_set)

my_other_set.clear()
print(len(my_other_set))
print(my_other_set)

# Eliminacion

del my_other_set # Esto elimina perma el set como en las tuplas
#print(my_other_set)

# Transformación

my_set = {"Facundo", "Pedrazzoli", 21}
my_list = list(my_set)
print(type(my_list))
print(my_list)
print(my_list[0]) # Para nada recomendable por lo aleatorio de los sets en su creacion

# Otras operaciones

my_other_set = {"Html","Css","Python"}

my_new_set = my_set.union(my_other_set)
print(my_new_set.union(my_new_set).union(my_set).union({"JavaScript","C#"})) # Los dos primeros .union() se ignoran por repetir datos y se ejecuta el ultimo

print(my_new_set.difference(my_set))

