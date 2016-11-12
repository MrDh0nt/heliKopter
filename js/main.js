var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var hu = 0;
var frame = 0;
var koptrImg = document.getElementById('koptr');
var scale = 6.5;
var koptrStepsX = 10 - scale;
var koptrStepsY = 10 - scale;
var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;
//function for getting the canvas to resize with a window resize
function resizeWindow(){
    canvas.width = window.innerWidth*0.8;
    if(canvas.width > 1200){
        canvas.width = 1200;
    }
    canvas.height = window.innerHeight*0.8;
    if(canvas.height > 500){
        canvas.height = 500;
    }
}
window.addEventListener("resize", resizeWindow);
resizeWindow();
//end of resize function EVERYTHING WITH CANVAS.WIDTH/HEIGHT HAS TO COME UNDER THIS FUNCTION!!! VVV
var koptrX = canvas.width / 3;
var koptrY = canvas.height / 2;
//functions and key handlers. VVV
window.addEventListener("keydown", keyDownHandler, false);
window.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
    if(e.keyCode === 37){
        //left
        leftPressed = true;
    }else if(e.keyCode === 39){
        //right
        rightPressed = true;
    }
    if(e.keyCode === 38){
        //up
        upPressed = true;
    }else if(e.keyCode === 40){
        //down
        downPressed = true;
    }
}
function keyUpHandler(e){
    if(e.keyCode === 37){
        //left
        leftPressed = false;
    }else if(e.keyCode === 39){
        //right
        rightPressed = false;
    }
    if(e.keyCode === 38){
        //up
        upPressed = false;
    }else if(e.keyCode === 40){
        //down
        downPressed = false;
    }
}

var draw = {
    rectangle: function(x, y, w, h){
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    },
    clearScreen: function(){
        //console.log(hue);
        ctx.beginPath();
        ctx.fillStyle = "#6cc4d9";
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fill();
        ctx.closePath();
    },
    smooth: function(tf){
        ctx.mozImageSmoothingEnabled = tf;
        ctx.webkitImageSmoothingEnabled = tf;
        ctx.msImageSmoothingEnabled = tf;
        ctx.imageSmoothingEnabled = tf;  
    },
    koptr: function(scene, x, y){
        draw.smooth(false); //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        /*if(rightPressed){
            ctx.save();
            //ctx.translate(koptrX + (koptrImg.width / 2), koptrY + koptrImg.height / 2);
            ctx.rotate(15*Math.PI/180);
            ctx.drawImage(koptrImg, scene * 32, 0, 32, 16, koptrX, koptrY, 32 * scale, 16 * scale);
            ctx.restore();
        }else if(leftPressed){
            ctx.save();
            ctx.translate(koptrX + (koptrImg.width / 2), koptrY);
            ctx.rotate(-15*Math.PI/180);
            ctx.drawImage(koptrImg, scene * 32, 0, 32, 16, 0, 0, 32 * scale, 16 * scale);
            ctx.restore();
        }else{*/
            ctx.drawImage(koptrImg, scene * 32, 0, 32, 16, x, y, 32 * scale, 16 * scale);
        //}
    },
};

function gameLoop(){
    draw.clearScreen();
    if(leftPressed){
        koptrX -= koptrStepsX;
    }
    if(rightPressed){
        koptrX += koptrStepsX;
    }
    if(upPressed){
        koptrY -= koptrStepsY;
    }
    if(downPressed){
        koptrY += koptrStepsY;
    }
    draw.koptr(frame, koptrX, koptrY);
    if(frame < 15){
        frame += 1;
    }else if(frame >= 15){
        frame = 0;
    }
}
setInterval(gameLoop, 25);