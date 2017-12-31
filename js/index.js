let cvs = document.getElementById("canvas"); // 800*600
let ctx = cvs.getContext("2d");

let cvsW = cvs.width,
    cvsH = cvs.height;
var girlImage = new Image(); // 1600*1004
var starImage = new Image(); // 49*7

var starNum = 30,
    starSet = [];

var lastTime,
    deltaTime;

var mouseIn = false, 
    opacity = 0;

window.onload = function(){
    girlImage.src = "images/girl.jpg";
    starImage.src = "images/star.png";
    init();
};

window.requestAnimFrame = (function(){
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(callback){
        window.setTimeout(callback,2000/6); //60fps (30fps画星星会卡 建议提高帧数)
    };
})();

cvs.addEventListener("mouseenter", function(){
    mouseIn = true;
}, false);
cvs.addEventListener("mouseout",function(){
    mouseIn = false;
},false);

function init(){
    ctx.fillStyle = "#270127";
    ctx.fillRect(0, 0, cvsW, cvsH);

    for(let i=0; i<starNum; i++){
        let starObj = new star();
        starSet.push(starObj);
    }

    lastTime = Date.now();
    loop();
}

function loop(){
    var curTime = Date.now();
    deltaTime = curTime - lastTime;
    lastTime = curTime;

    drawImage();
    drawStar();
    requestAnimFrame(loop);
}

function drawImage(){
    ctx.drawImage(girlImage, 0, 0, 800,502);
}
