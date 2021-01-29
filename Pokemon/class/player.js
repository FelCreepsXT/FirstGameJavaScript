class Player extends ObjectInstance{
    constructor(posX, posY, width, height, link ,speX, speY, column, row){
        super(posX, posY, width, height, link);
        this.speX = speX;
        this.speY = speY;
        this.column = column;
        this.row = row;
        this.dx = 0;
        this.dy = 0;
        this.pokemons = [];
    }

    addPokemon(pokemon){
        this.pokemons.push(pokemon);
    }

    drawImage(){
        //img, posicionarx, posicionary, seleccionar el 0 del queu empieza, y, x, y, width, height
        ctx.drawImage(this.link, this.link.width/this.column * this.dx, this.link.height/this.row *  this.dy, this.link.width/this.column, this.link.height/this.row, this.posX, this.posY, this.width, this.height);
    }

    midPlayerX(value){
        this.posX = value/2 - this.width/2
    }

    midPlayerY(value){
        this.posY = value/2 - this.height/2
    }

    endPlayerX(value){
        this.posX = value - this.width;
    }

    showPokemon(value, width, height){
        let i = 0;
        ctx.beginPath("black");
        ctx.rect(value/2 - width/2, 30, width, height);
        ctx.fillStyle = "black";
        ctx.fill();
        this.pokemons.forEach(element => {
            ctx.beginPath("red");
            ctx.rect(value/2 - width/2 + (width/2 * i), 30, width/2, height/4);
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.drawImage(element.link, value/2 - width/2 + (width/2 * i) , 30, width/2, height/4);
            i++;
            if(i < 2)
                i = 0;
            
        });
    }

}
