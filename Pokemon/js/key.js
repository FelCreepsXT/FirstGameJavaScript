let lastX, lastY;
let battle = 0;
let selectPokemonForBattle = false;
let isBattle = false;

addEventListener('keydown', (e) => {
    if(decision == false){
        if(e.code == 'KeyA'){
            move(player, 'A');
            player.dy = 1;
            if(scen == 3)
                battle++;
        }
        else if(e.code == 'KeyD'){
            move(player, 'D');
            player.dy = 2;
            if(scen == 3)
                battle++;
        }
        else if(e.code == 'KeyS'){
            move(player, 'S');
            player.dy = 0;
            if(scen == 3)
                battle++;
        }
        else if(e.code == 'KeyW'){
            move(player, 'W');
            player.dy = 3;
            if(scen == 3)
                battle++;
        }

        player.dx++;
        if(player.dx == 3){
            player.dx = 0;
        }

        if(objectPlayerNearDoor(player, house) == true && e.code == 'KeyE'){
            img.src =  './img/houseInt.png';
            lastX = player.posX;
            lastY = player.posY;
            player.posX = containerCanvas.width/2 - player.width/2;
            player.posY = containerCanvas.height - player.height;
            scen = 2;
        }

        if(e.code == 'KeyQ'){
            if(showPokemon == false)
                showPokemon = true;
            else if(showPokemon == true)
                showPokemon = false;
            console.log(showPokemon);
        }
    }
})