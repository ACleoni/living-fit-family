class Unit:
    def __init__(self, name, position, energy=10, work=5):
        self.name = name
        self.energy = energy
        self.work = work
        self.position = position

    def burden(self, work):
        self.energy = self.energy - work

    def attack(self, enemy):
       enemy.burden(self.work)
    
    def move(self, dir):
        if dir == "up":
            self.position = [self.position[0], self.position[1]+1]
        elif dir == "down":
            self.position = [self.position[0], self.position[1]-1]
        elif dir == "right":
            self.position = [self.position[0]+1, self.position[1]]
        elif dir == "left":
            self.position = [self.position[0]-1, self.position[1]]


class Player(Unit):
    def __init__(self, name, position, energy=10):
        super().__init__(name, position, energy)


class Winning(Unit):
    def __init__(self, name, position):
        super().__init__(name, position)


class Supplies:
    def __init__(self, name, position):
        self.position = position
        self.name = name

class Good_Stapler(Supplies):
    def __init__(self, name, position):
        super().__init__(name, position)
        self.owner = None

    def use(self):
       self.owner.energy += 5
       for i in range(len(self.owner.inventory)):
            if self.owner.inventory[i] == self:
                del self.owner.inventory[i]
                self.owner = None

menu = {
    "Move": {
        "options": ["up", "down","left","right"],
        "accept_input": True,
        "on_accept": {
            "action_on": "player",
            "action": "move"
        }
    }
}

name = input("Who is trying to escape the office?\n")
player = Player(name, [1, 1])

enemies = [
    Unit("Michael and hes got something stupid to say", [2, 4]),
    Unit("Dwight and hes looking for that pen from 2 months ago", [5, 4]),
    Unit("Angela and shes wants us to attend her cat's wedding...and funeral...again", [
         3, 2]),
    Unit(
        "Toby and he wants me to sign that HR document for indecent exposure", [1, 5]),
    Unit("Michael and hes got something stupid to say", [-2, 4]),
    Unit("Dwight and hes looking for that pen from 2 months ago", [-5, 4]),
    Unit(
        "Angela and shes wants us to attend her cat's wedding...and funeral...again", [-3, 2]),
    Unit(
        "Toby  and he wants me to sign that HR document for indecent exposure", [-1, 5]),
    Unit("Michael and hes got something stupid to say", [2, -4]),
    Unit("Dwight and hes looking for that pen from 2 months ago", [5, -4]),
    Unit("Angela and shes wants us to attend her cat's wedding...and funeral...again", [
         3, -2]),
    Unit(
        "Toby  and he wants me to sign that HR document for indecent exposure", [1, -5])
]

winning = [
    Unit("Finally you find Jim and Pam and can get the fuck outta here!", [5, 5]),
    Unit("Finally you find Jim and Pam and can get the fuck outta here!", [-5, 5]),
    Unit(
        "Finally you find Jim and Pam and can get the fuck outta here!", [5, -5]),
    Unit("Finally you find Jim and Pam and can get the fuck outta here!", [-5, -5])
]

stuff = [
    # Supplies("You found lit")
]
menu = ["Move up", "Move down", "Move left", "Move Right"]


def show_menu():
    for i in range(len(menu)):
        print(f"{i+1}. {menu[i]}")

playing = True

while playing:
    print("Employee:\n", player.name)
    print("energy:\n", player.energy)
    print("location:\n", player.position)
    show_menu()
    try:
        action = int(input("Escape! but which way?\n"))
    except ValueError:
        print("You have to escape! Pick an available direction")
        action = None

    if action:
        if action == 1:
            player.move("up")
        elif action == 2:
            player.move("down")
        elif action == 3:
            player.move("left")
        elif action == 4:
            player.move("right")

    for enemy in enemies:
        if enemy.position == player.position:
            print(f"Oh great it's {enemy.name}")
            enemy.attack(player)

    for winner in winning:
        if winner.position == player.position:
            print(f"Look! {winner.name}")
            playing = False
            break
        if player.energy == 0:
            print("Youll never go home now!")
            print("Game Over! You're stuck at the office!!")
            break
