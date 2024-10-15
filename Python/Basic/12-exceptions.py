
### Excepciones ###

number_one = 5
number_two = 1

number_two = "1"

# try except

try:
    print(number_one + number_two)
    print("No se ha producido un error.")
except:
    # Se ejecuta si se produce una excepcion
    print("Se a producido un error.")

# try except else

try:
    print(number_one + number_two)
    print("No se ha producido un error.")
except: 
    print("Se a producido un error.")
else:# Opcional
    # Se ejecuta si no se produce una excepcion.
    print("La ejecucion continua correctamente.")
finally:# Opcional
    print("La ejecucion continua.")
    
# Exceptions por Type

try:
    print(number_one + number_two)
    print("No se ha producido un error.")
except ValueError:
    # Se ejecuta si se produce este error especifico.
    print("Se a producido un ValueError")
except TypeError:
    # Se ejecuta si se produce este error especifico.
    print("Se a producido un TypeError")
    
# Captura de la informacion de la excepcion

try:
    print(number_one + number_two)
    print("No se ha producido un error.")
except Exception as error:
    print(error)