containerCanvas.addEventListener('click', (e) => {
    if(scen == 2 && colission == 0){
        if(e.offsetX >= pokemonChooseInit.posX && e.offsetX <= pokemonChooseInit.width/3 * 1 + pokemonChooseInit.posX &&
            e.offsetY >= pokemonChooseInit.posY && e.offsetY <= pokemonChooseInit.posY + pokemonChooseInit.height - 100){
            pokemonChooseInit.colorBoxPokemon('red','transparent','transparent');
        }
        else if(e.offsetX >= pokemonChooseInit.posX && e.offsetX <= pokemonChooseInit.width/3 * 2 + pokemonChooseInit.posX &&
            e.offsetY >= pokemonChooseInit.posY && e.offsetY <= pokemonChooseInit.posY + pokemonChooseInit.height - 100){
                pokemonChooseInit.colorBoxPokemon('trasnparent','red','transparent');
        }
        else if(e.offsetX >= pokemonChooseInit.posX && e.offsetX <= pokemonChooseInit.width/3 * 3 + pokemonChooseInit.posX &&
            e.offsetY >= pokemonChooseInit.posY && e.offsetY <= pokemonChooseInit.posY + pokemonChooseInit.height - 100){
                pokemonChooseInit.colorBoxPokemon('trasnparent','transparent','red');
        }

        if(e.offsetX >= pokemonChooseInit.posX + pokemonChooseInit.width/2 - pokemonChooseInit.width/4 && e.offsetX <= pokemonChooseInit.width/2 + pokemonChooseInit.posX + pokemonChooseInit.width/2 - pokemonChooseInit.width/4 &&
            e.offsetY >= pokemonChooseInit.posY + pokemonChooseInit.height - pokemonChooseInit.height/4 - 10 && e.offsetY <= pokemonChooseInit.posY + pokemonChooseInit.height - pokemonChooseInit.height/4 - 20 + pokemonChooseInit.height/4 &&
            (pokemonChooseInit.color1 == 'red' || pokemonChooseInit.color2 == 'red' || pokemonChooseInit.color3 == 'red' )){
            colission = 3;
            decision = false;
            player.addPokemon(pokemonChooseInit.confirmPokemon());
            havePokemon = true;
            console.log(player.pokemons)
        }
    }

    if(scen == 4 && isBattle == true){
        if(e.offsetX >= attack1.posX && e.offsetX <= attack1.width + attack1.posX &&
            e.offsetY >= attack1.posY && e.offsetY <= attack1.posY + attack1.height){
            asd.updateLife(2);
            isTurn = false;
        }
        if(e.offsetX >= attack2.posX && e.offsetX <= attack2.width + attack2.posX &&
            e.offsetY >= attack2.posY && e.offsetY <= attack2.posY + attack2.height){
            asd.updateLife(3);
            isTurn = false;
        }
        if(e.offsetX >= attack3.posX && e.offsetX <= attack3.width + attack3.posX &&
            e.offsetY >= attack3.posY && e.offsetY <= attack3.posY + attack3.height){
            asd.updateLife(4);
            isTurn = false;
        }
    }
})