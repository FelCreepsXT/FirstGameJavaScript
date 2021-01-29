function objectColission(block1, block2){
    if( block1.posX + block1.speX < block2.posX + block2.width &&
        block1.posY + block1.speY < block2.posY + block2.height &&
        block2.posX < block1.posX + block1.width + block1.speX &&
        block2.posY < block1.posY + block1.height + block1.speY
        ){
        block1.speX = 0;    
        block1.speY = 0;    
        return true;
    }   
    
}

function objectPlayerNearDoor(block1, block2){
    if(
        block1.posX < block2.posX + block2.width/2 - block2.width/4 + block2.width/2 &&
        block1.posY < block2.posY + block2.height + block2.height/4   &&
        block2.posX + block2.width/2 - block2.width/4< block1.posX + block1.width &&
        block2.posY + block2.height - block2.height/4 < block1.posY + block1.height
        ){
            return true            
    }
}

function canvasColission(object){
    if(object.posX  + object.speX < 0 || object.posX + object.width + object.speX > containerCanvas.width){
        object.speX = 0;
    }
    else if(object.posY + object.speY < 0 || object.posY + object.height + object.speY > containerCanvas.height){
        object.speY = 0;
    }      
}

