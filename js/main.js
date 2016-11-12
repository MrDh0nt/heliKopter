var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var hu = 0;
var frame = 0;
var koptrImg = document.getElementById("koptr");
var scale = 10;
var koptrCenterX = (koptrImg.width / 2) * scale;
var koptrCenterY = (koptrImg.height / 2) * scale;
//function for getting the canvas to resize with a window resize
function resizeWindow(){
    canvas.width = window.innerWidth*0.8;
    canvas.height = window.innerHeight*0.8;
}
window.addEventListener('resize', resizeWindow);
resizeWindow();
//end of resize function

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
        ctx.fillStyle = "#FFF";
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fill();
        ctx.closePath();
    },
    backGroundBody: function(hue){
        document.body.style.backgroundColor = "hsl(" + hue + ", 50%, 42%)";
    },
    smooth: function(tf){
        ctx.mozImageSmoothingEnabled = tf;
        ctx.webkitImageSmoothingEnabled = tf;
        ctx.msImageSmoothingEnabled = tf;
        ctx.imageSmoothingEnabled = tf;  
    },
    koptr: function(scene, x, y){
        draw.smooth(false); //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        ctx.drawImage(koptrImg, scene * 32, 0, 32, 16, x, y, 32 * scale, 16 * scale);
    }
};

function gameLoop(){
    draw.clearScreen();
    if(hu < 359){
        hu += 0.1; 
    }else if(hu >= 359){
        hu = 0;
    }
    draw.backGroundBody(hu);
    draw.koptr(frame, 0, 0);
    if(frame < 15){
        frame += 1;
    }else if(frame >= 15){
        frame = 0;
    }
}
setInterval(gameLoop, 25);