let player = new Player(500, containerCanvas.height/2, 70, 70, 'sprite', 10, 10, 4, 4);
let house = new House(200, 50, 150,150, 'house');
let enterHouse = new Alert(containerCanvas.width, containerCanvas.height, 300, 60, 'aviso');
let teacher = new ObjectInstance(containerCanvas.width/2 - 30, 100, 60, 150, 'teacher');
let pokemonChooseInit = new PokemonInit(containerCanvas.width, 150, 500, 300);
    pokemonChooseInit.pokemonInit('charmander', 'squitler', 'pikachu');

let asd = new Pokemon('charmander', 'charmander', 20, 10, 2);

    ctx.rect(this.posX - 2, this.posY/2 - this.height/2, 2, 50);
let arrowTop = new Arrow(containerCanvas.width, containerCanvas.height, 50, 2);
    arrowTop.arrowTop();
let arrowBotton = new Arrow(containerCanvas.width, containerCanvas.height, 50, 2);
    arrowBotton.arrowBotton();
let arrowRight = new Arrow(containerCanvas.width , containerCanvas.height, 2, 50);
    arrowRight.arrowRight();
let arrowLeft = new Arrow(containerCanvas.width, containerCanvas.height, 2, 50);
    arrowLeft.arrowLeft();

let scen = 1;
let colission = 1;
let decision = false;
let showPokemon = false;
let isTurn = false;

let attack1 = new ObjectInstance(50, containerCanvas.height - 100, 80, 40, 'teacher');
let attack2 = new ObjectInstance(200, containerCanvas.height - 100, 80, 40, 'teacher');
let attack3 = new ObjectInstance(350, containerCanvas.height - 100, 80, 40, 'teacher');
let life1 = new ObjectInstance(50, 100, 80, 40, 'teacher');
let life2 = new ObjectInstance(600, 100, 80, 40, 'teacher');

let dmg;
let havePokemon = false;

function gameLoop(){
    

    if(scen == 1){
        clearCanvas();
        if(havePokemon)
            arrowRight.drawArrow();
        if(objectPlayerNearDoor(player, house) == true){
            enterHouse.alert();
        }
        house.drawImage();
        player.drawImage();
    }
    else if(scen == 2){
        clearCanvas();
        arrowBotton.drawArrow();
        player.drawImage();       
        teacher.drawImage();
        if(colission == 0){
            decision = true;
            pokemonChooseInit.drawColissionTeacher();
        }
    }
    else if(scen == 3){
        clearCanvas();
        arrowLeft.drawArrow();
        player.drawImage();
        if(showPokemon == true){
            player.showPokemon(containerCanvas.width, 400, 600);
        }

        if(battle == 50){
            isBattle = true;
            img.src = '/img/battle.png'
            scen = 4;
            battle = 0;
        }
    }
    else if(scen == 4){
        clearCanvas();
        player.pokemons[0].drawImageBattleRight(containerCanvas.height);
        asd.drawImageBattleLeft(containerCanvas.height);
        life1.drawRecLife(player.pokemons[0].life);
        life2.drawRecLife(asd.life);

        if(isTurn == false){
            dmg = Math.floor(Math.random() * (4 - 1) + 1);
            player.pokemons[0].updateLife(dmg);
            isTurn = true;
        }

        if(player.pokemons[0].life == 0 || asd.life == 0){
            scen = 3;
            isTurn = false;
            if(player.pokemons[0].life == 0)
                console.log("You lose");

            if(asd.life == 0)
                console.log("You win");
            player.pokemons[0].updateLife(20);
            img.src = '/img/scene3.png'
            asd.updateLife(20);            
        }

        attack1.drawRec('Red');
        attack2.drawRec('Red');
        attack3.drawRec('Red');
    }

    
    
}

setInterval(() => {
    gameLoop();    
}, 1000 / 50);