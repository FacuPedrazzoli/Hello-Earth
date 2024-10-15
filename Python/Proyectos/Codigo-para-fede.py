
def jeje(number):
    if number == 1:
        return "Te amo"
    elif number == 2:
        return "Sos el amor de mi vida"
    elif number == 3:
        return "Espero que te haga bien a la pancita la sopa"
    elif number == 4:
        return "No me imagino una vida sin vos mi vida"
    elif number == 5:
        return "Sos preciosa\nSos preciosa\nSos preciosa\nSos preciosa\nSos preciosa\n"
    elif number == 6:
        return "Como te dije la otra vez no veo la hora de ya mudarnos a esa casita y hacerla un hogar"
    elif number == 7:
        return "Tenes los ojos mas lindos del mundo"
    elif number == 8:
        return "Mañana cuando te sientas un poco mejor de la panza voy a hacer una carne riqui riqui"
    elif number == 9:
        return "Espero poder trabajar de programacion para poder darte una vida como lo mereces y a nuestros hijos"
    elif number == 10:
        return "Aunque no lo suelo decir nunca, espero ser un buen padre para nuestros hijos y ser un buen esposo para mi niña"
    elif number == 11:
        return "Pude sacar el None suuuuu"
    else:
        return "Tampoco te pases es del 1 al 11"
        
numero = int(input("Pone un numero aca: "))
resultado = jeje(numero)
print(resultado)