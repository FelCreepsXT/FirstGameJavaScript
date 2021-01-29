const containerCanvas = document.getElementById("container");
const ctx = containerCanvas.getContext("2d");

var img = new Image();
img.src = '/img/scene.png'

function clearCanvas(){
    ctx.drawImage(img, 0, 0, containerCanvas.width, containerCanvas.height);
}

var N = 10;

function move(object, value){
    if(value == 'W' ){
        object.speX = 0;
        object.speY = -N;
    }
    else if(value == 'A'){
        object.speX = -N;
        object.speY =  0;
    }
    else if(value == 'S'){
        object.speX = 0;
        object.speY = N;
    }
    else if(value == 'D'){
        object.speX = N;
        object.speY =  0;
    }    

    canvasColission(object);
    if(scen == 1){
        objectColission(object, house);
        if(objectColission(object, arrowRight) && havePokemon == true){
            img.src = '/img/scene3.png'
            player.posX = 0;
            player.midPlayerY(containerCanvas.height);
            scen = 3;
        }
    }
    else if(scen == 2){
        if(objectColission(object, teacher) && colission == 1){
            colission = 0;
        }
        else if(colission == 0){
            colission = 1;
        }
        objectColission(object, teacher);
        if(objectColission(object, arrowBotton)){
            img.src =  '/img/scene.png';
            player.posX = lastX;
            player.posY = lastY;
            scen = 1;
        }
    }
    else if(scen == 3){
        if(objectColission(object, arrowLeft)){
            img.src =  '/img/scene.png';
            player.endPlayerX(containerCanvas.width);
            player.midPlayerY(containerCanvas.height);
            scen = 1;
        }
        if(battle == 50){
            img.src = '/img/battle.png';
            scen = 4;
        }
    }
    object.posX = object.posX + object.speX;
    object.posY = object.posY + object.speY;
}