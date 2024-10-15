
### Condicionales ###

my_condition = True

if my_condition: # Es lp mismo que if my_condition == True:
    print("Se ejecuta la condicion del if.\n")

my_condition = 5 * 5
if my_condition == 10:
    print(f"Se ejecuta la condicion del segundo if.\n")

if my_condition > 10 and my_condition < 20:
    print(f"Es mayor que 10 y menor que 20.\n")
elif my_condition == 25:
    print("Es igual a 25.\n")
else:
    print("Es menor o igual que 10 o  mayor o igual que 20 o distinto de 25.\n")

print("La ejecucion continua.\n")

my_string = ""

if not my_string:
    print("Mi cadena de texto es vacia.\n")
    
if my_string == "Mi cadena de textooooo.":
    print("Estas cadenas de texto.\n")