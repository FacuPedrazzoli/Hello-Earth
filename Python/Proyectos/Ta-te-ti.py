
from random import randrange

import random

# Definiendo la funcion para imprimir un tablero.
def Desplegar_tablero(board):
	print("+-------" * 3,"+", sep="")
	for row in range(3):
		print("|       " * 3,"|", sep="")
		for column in range(3):
			print("|   " + str(board[row][column]) + "   ", end="")
		print("|")
		print("|       " * 3,"|",sep="")
		print("+-------" * 3,"+",sep="")
	print("\n")

# Definiendo el movimiento del jugador
def Movimiento_del_jugador(board):
    status = False
    while not status:
        move = input("Ingresa tu movimiento papito: ")
        status = move or 1 and move >= "1" and move <= "9"
        if not status:
            print(f"El movimiento {move} es invalido papa.")
            continue
        move = int(move) - 1
        row = move // 3
        column = move % 3
        sing = board[row][column]
        status = sing not in ["X","O"]
        if not status:
            print(f"la casilla {move} no esta disponible.")
    board[row][column] = "X"

# Definiendo la funcion para verificar si algun jugador gano o no.
def Verificar_al_ganador(board,sign):
    if sign == "X":
        player = "Yo"
    elif sign == "O":
        player = "Maquina"
    else:
        player = None
    diagonal1 = diagonal2 = True
    for i in range(3):
        if board[i][0] == sign and board[i][1] == sign and board[i][2] == sign: 
            return player
        if board[0][i] == sign and board[1][i] == sign and board[2][i] == sign:
            return player
        if board[i][i] != sign:
            diagonal1 = False
        if board[2 - i][2 - i] != sign:
            diagonal2 = False
    if diagonal1 or diagonal2:
        return player
    return None

# Definiendo una lista de casillas libres.
def Lista_de_casillas_libres(board):
    boxs = []
    for row in range(3):
        for column in range(3):
            if board[row][column] not in ["X","O"]:
                boxs.append([row,column])
    return boxs

# Definiendo los movimientos de la maquina.
def Movimiento_maquina(board):
    boxs = Lista_de_casillas_libres(board)
    choices = len(boxs)
    if choices > 0:
        machine_move = randrange(0,choices)
        rox,column = boxs[machine_move]
        board[rox][column] = "O"

# Definiendo todo el juego.
def Jugando_tateti():
    board = [[3 * j + i + 1 for i in range(3)] for j in range(3)]
    boxs = Lista_de_casillas_libres(board)
    player_turn = True
    while len(boxs):
        Desplegar_tablero(board)
        if player_turn:
            Movimiento_del_jugador(board)
            victory = Verificar_al_ganador(board, "X")
        else:
            Movimiento_maquina(board)
            victory = Verificar_al_ganador(board,"O")
        if victory !=None:
            break
        player_turn = not player_turn
        boxs = Lista_de_casillas_libres(board)
    Desplegar_tablero(board)
    if victory == "Yo":
        print("Muy bien papa ganaste.")
    elif victory == "Maquina":
        print("Gano la maquina flaco sos un pelotudo.")
    else:
        print("Empate sos casi tan fraca como si hubiera ganado la maquina pero por poco safas.")

Jugando_tateti()