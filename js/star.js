class star{
    constructor(){
        this.x = Math.random() * cvsW;
        this.y = Math.random() * cvsH;
        this.step = Math.floor(Math.random() * 7); // [0,6]
        this.vx = Math.random() * 0.4 - 0.2; // [-0.2, 0.2];
        this.vy = Math.random() * 0.2 - 0.1;
        this.timer = 0;
    }
    init(){
        this.x = Math.random() * cvsW;
        this.y = Math.random() * cvsH;
    }
}

function drawStar(){
    ctx.save();
    starFadeToggle();

    for(star of starSet){
        star.x += star.vx;
        star.y += star.vy;

        star.timer += deltaTime;
        if(star.timer > 40){
            star.step = (star.step +1) % 7;
            star.timer = 0;
        } 

        //超过边界 重新初始化
        if(star.x >= cvsW || star.x <= 0) star.init();
        if(star.y >= cvsH || star.y <= 0) star.init();

        ctx.drawImage(starImage, star.step*7, 0, 7, 7, star.x, star.y, 7, 7);
    }
    ctx.restore();
}


function starFadeToggle(){
    if(mouseIn){
        opacity = Math.min(opacity += 0.03, 1);
    }else{
        opacity = Math.max(opacity -= 0.03, 0);
    }
    ctx.globalAlpha = opacity;
}
