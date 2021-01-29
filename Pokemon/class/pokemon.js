class Pokemon {
    constructor(link, name, life, exp, damage){
        this.link = new Image();
        this.link.src = `./img/pokemon/${link}.png`;
        this.name = name;
        this.life = life;
        this.exp = exp;
        this.damage = damage;
        this.power = [];
    }

    drawImageBattleRight(value){
        ctx.drawImage(this.link, 20, value/2 - 65, 250, 250);
    }

    drawImageBattleLeft(value){
        ctx.drawImage(this.link, value - 250, value/2 - 65, 250, 250);
    }

    updateLife(value){
        this.life -= value;
        if(this.life < 0){
            this.life = 0;
        }
    }
}

