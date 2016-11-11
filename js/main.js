var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var hu = 0;
var kopterImg = new Image();
//kopterImg.src = '../css/kopterImg.gif';

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
        ctx.fillStyle = "#000";
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fill();
        ctx.closePath();
    },
    backGroundBody: function(hue){
        document.body.style.backgroundColor = "hsl(" + hue + ", 50%, 42%)";
    }/*,
    koptr: function(){
        ctx.beginPath();
        ctx.drawImage()
    }*/
};

function gameLoop(){
    draw.clearScreen();
    if(hu < 359){
        hu += 0.1; 
    }else if(hu >= 359){
        hu = 0;
    }
    draw.backGroundBody(hu);
    //draw.koptr();
}
setInterval(gameLoop, 25);