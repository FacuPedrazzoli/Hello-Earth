
import random

def adivinanza():
    
    secret_number = int(random.randint(0,100))
    user_attempts = 0
    attempts_max = 5

    print(
    """
    +==================================+
    | Introduce un número entero       |
    | y adivina qué número he          |
    | elegido para ti.                 |
    | (Te voy a ir dando pistas).      |
    | Pero te doy 5 intentos           |
    | Entonces,                        |
    | ¿Cuál es el número secreto?      |
    +==================================+
    \n""")

    if secret_number % 2 == 0:
        print("El numero secreto es par.\n")
    else:
        print("El numero secreto en impar.\n")

    while user_attempts < attempts_max:
        user_number = int(input("Ingresa tu numero: "))
        user_attempts += 1

        if user_number < secret_number:
            print(f"\nEl {user_number} es menor al numero secreto.")

        elif user_number > secret_number:
            print(f"\nEl {user_number} es mayor al numero secreto.")
        
        elif user_attempts == 4:
            print(f"Te informo por las dudas que te queda un solo intento asi que pensa bien.")
        
        else:
            print(f"\nMuy bien!!! pudiste adivinarlo el numero secreto que era {secret_number}")
            break

    if user_attempts == attempts_max:
        if user_number != secret_number:
            print(f"\nLastimosamente no pudiste adivinarlo, el numero secreto era {secret_number}.")
            
adivinanza()