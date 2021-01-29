class House extends ObjectInstance{
    constructor(posX, posY, width, height, link){
        super(posX, posY, width, height, link);
    }

    drawHouse(color){
        super.draw(color);
    }
    
    drawDoor(color){
        ctx.beginPath(color);
        ctx.rect(this.posX + this.width/2 - this.width/4, this.posY + this.height - this.height/4, this.width/2, this.height/2);
        ctx.fillStyle = color;
        ctx.fill();
    }

    drawHousee(color1, color2){
        this.drawHouse(color1);
        this.drawDoor(color2);
    }

    drawImage(){        
        this.drawDoor('red');
        ctx.drawImage(this.link, this.posX, this.posY, this.width, this.height);
    }
}