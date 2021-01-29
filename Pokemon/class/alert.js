class Alert extends ObjectInstance{
    constructor(posX, posY, width, height, link){
        super(posX, posY, width, height, link);
    }

    alert(){
        ctx.drawImage(this.link, this.posX/2 - this.width/2, this.posY - this.height * 2, this.width, this.height);
    }
}