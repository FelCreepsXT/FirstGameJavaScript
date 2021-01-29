class Arrow extends ObjectInstance{
    constructor(posX, posY, width, height){
        super(posX, posY, width, height);
    }

    arrowRight(){
        this.posX = this.posX - this.width;
        this.posY = this.posY/2 - this.height/2;
    }

    arrowLeft(){
        this.posX = 0;
        this.posY = this.posY/2 - this.height/2;
    }

    arrowTop(){
        this.posX = this.posX/2 - this.width/2;
        this.posY = 0;
    }

    arrowBotton(){
        this.posX = this.posX/2 - this.width/2;
        this.posY = this.posY - this.height;
    }

    drawArrow(){
        ctx.beginPath("red");
        ctx.rect(this.posX, this.posY, this.width, this.height);
        ctx.fillStyle = "red";
        ctx.fill();
    }

    drawArrowRight(){
        ctx.beginPath("red");
        ctx.rect(this.posX - 2, this.posY/2 - this.height/2, 2, 50);
        ctx.fillStyle = "red";
        ctx.fill();
    }


    drawArrowBotton(){
        ctx.beginPath("red");
        ctx.rect(this.posX/2 - 25, this.posY - 2, 50, 2);
        ctx.fillStyle = "red";
        ctx.fill();
    }

}
