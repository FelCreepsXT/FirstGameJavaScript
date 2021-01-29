class ObjectInstance{
    constructor(posX, posY, width, height, link){
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.link = new Image();
        this.link.src = `./img/${link}.png`;
    }

    drawImage(){
        ctx.drawImage(this.link, this.posX, this.posY, this.width, this.height);
    }
    
    drawRec(color){
        ctx.beginPath(color);
        ctx.rect(this.posX, this.posY, this.width, this.height);
        ctx.fillStyle = color;
        ctx.fill();
    }

    drawRecLife(life){
        ctx.font = "30px Arial";
        ctx.fillText(life,this.posX, this.posY)
    }
}

class Canvas extends ObjectInstance{
    constructor(width, height, link){
        super(width, height, link);
    }

    drawCanvas(){
        ctx.drawImage(this.link, 0, 0, this.width, this.height);
    }
}

