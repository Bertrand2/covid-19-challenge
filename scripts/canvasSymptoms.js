"use strict";

const symptomIcons = document.querySelectorAll("canvas.symptoms-icon");

//generate canvas
symptomIcons.forEach( (x,i) => {
    const context = x.getContext("2d");
    const img = new Image();
    img.addEventListener("load", () =>
        context.drawImage(img, 15+120*(i%3), 175+92*Math.floor(i/3), 72, 72, 11, 11, 50, 50)
    );
    img.src = "assets/sprite-home-v3.png";
    x.height = "72";
    x.width = "72";
});

