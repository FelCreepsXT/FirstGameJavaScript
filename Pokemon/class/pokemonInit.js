class PokemonInit extends ObjectInstance{
    constructor(posX, posY, width, height){
        super(posX, posY, width, height);
        this.posX = posX/2 - width/2;
        this.posY = posY;
        this.color1 = 'trasparent';
        this.color2 = 'trasparent';
        this.color3 = 'trasparent';
        this.botton = new Image();
        this.botton.src = `./img/select.png`
        this.select = '';
    }

    pokemonInit(name1, name2, name3){
        this.name1 = new Image(); 
        this.name2 = new Image();
        this.name3 = new Image();
        this.name1.src = `./img/pokemon/${name1}.png`;   
        this.name2.src = `./img/pokemon/${name2}.png`;
        this.name3.src = `./img/pokemon/${name3}.png`;
    }

    colorBoxPokemon(color1, color2, color3){
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
    }

    color(asd){
        this.color4=asd;
    }

    drawPokemonChoose(){
        ctx.beginPath(this.color1);
        ctx.rect(this.posX+ (this.width/3 * 0), this.posY, this.width/3, this.height - 100);
        ctx.fillStyle = this.color1;
        ctx.fill();
        ctx.drawImage(this.name1, this.posX + (this.width/3 * 0), this.posY, this.width/3, this.height - 100);

        ctx.beginPath(this.color2);
        ctx.rect(this.posX+ (this.width/3 * 1), this.posY, this.width/3, this.height - 100);
        ctx.fillStyle = this.color2;
        ctx.fill();
        ctx.drawImage(this.name2, this.posX + (this.width/3 * 1), this.posY, this.width/3, this.height - 100);

        ctx.beginPath(this.color3);
        ctx.rect(this.posX + (this.width/3 * 2), this.posY, this.width/3, this.height - 100);
        ctx.fillStyle = this.color3;
        ctx.fill();
        ctx.drawImage(this.name3, this.posX + (this.width/3 * 2), this.posY, this.width/3, this.height - 100);

        ctx.drawImage(this.botton, this.posX + this.width/2 - this.width/4, this.posY + this.height - this.height/4 - 10, this.width/2, this.height/4);
    }

    confirmPokemon(){
        if(this.color1 == 'red')
            return new Pokemon('charmander', 'charmander', 20, 0, 5);
        else if(this.color2 == 'red')
            return new Pokemon('squitler', 'squitler', 20, 0, 5);
        else if(this.color3 == 'red')
            return new Pokemon('pikachu', 'pikachu', 20, 0, 5);
    }

    drawPokemonInit(){
        ctx.beginPath("black");
        ctx.rect(this.posX, this.posY, this.width, this.height);
        ctx.fillStyle = "black";
        ctx.fill();
    }


    drawColissionTeacher(){
        this.drawPokemonInit();
        this.drawPokemonChoose();
    }

}