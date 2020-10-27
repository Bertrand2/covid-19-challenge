"use strict";

const icons = document.querySelectorAll("canvas.stats-icon");

//generate canvas
icons.forEach( (x,i) => {
    const img = document.createElement("img");
    img.src = "assets/sprite-home.png";
    const context = x.getContext("2d");
    context.drawImage(img, (72*i), 0, 72, 72, 0, 0, 72, 72);
});
