
### Strings ###

my_string = "Mi String"
my_other_string = 'Mi otro String'

print(len(my_string))
print(len(my_other_string))

print(my_string + " " + my_other_string)

my_new_line_string = "Este es un String \ncon salto de linea"
print(my_new_line_string)

my_tab_string = "\tEste es un String con tabulacion"
print(my_tab_string)

my_scape_string = "\tEste es un String \nescapado"
print(my_scape_string)

# Formateo

name, surname, age = "Facundo", "Pedrazzoli", 21

print("Mi nombre es {} {} y mi edad es {}".format(name,surname,age))
print("Mi nombre es %s %s y mi edad es %d" %(name,surname,age)) #Formato valido para restringir el tipo de dato.
print("Mi nombre es " + name + " " + surname + " y mi edad es " + str(age)) #Formato valido pero no recomendable para el sistema.
print(f"Mi nombre es {name} {surname} y mi edad es {age}") #Lo mismo que format pero mucho mas 


# Desenpaquetado de caracteres

lenguaje = "python"
a, b, c, d, e, f = lenguaje
print(a)
print(d)

# Division

lenguage_slice1 = lenguaje[1:3]
print(lenguage_slice1)

lenguage_slice2 = lenguaje[1:]
print(lenguage_slice2)

lenguage_slice3 = lenguaje[-2]
print(lenguage_slice3)

lenguage_slice4 = lenguaje[0:6:2]
print(lenguage_slice4)

# Reversa

reversed_lenguage = lenguaje[::-1]
print(reversed_lenguage)

# Funciones

print(lenguaje.capitalize())
print(lenguaje.upper())
print(lenguaje.lower())
print(lenguaje.count("t"))
print(lenguaje.isnumeric())
print("1".isnumeric())
print(lenguaje.isupper())
print(lenguaje.upper().isupper())
print(lenguaje.startswith("py"))