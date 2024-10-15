
### Clases ###

class MyEmptyPerson:
    pass

print(MyEmptyPerson)
print(MyEmptyPerson())

class Person:
    def __init__(self, name, surname, alias = "Sin alias."):
        self.full_name = f"{name} {surname} ({alias})" # Propiedad publica
        self.__name = name # Propiedad privada
    
    def get_name (self):
        return self.__name
    
    def walk(self):
        print(f"{self.full_name} esta camiando...")

my_person = Person("Facundo", "Pedrazzoli")
print(f"{my_person.full_name}")
my_person.walk()

my_other_person = Person("Agustin", "Fernandez", "Culo roto")
print(my_other_person.full_name)
my_other_person.walk()
my_other_person.full_name = "Sos terrible puuuuutoooooo"
print(my_other_person.full_name)