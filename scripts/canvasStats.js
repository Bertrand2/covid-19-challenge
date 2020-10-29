"use strict";

const statIcons = document.querySelectorAll("canvas.stats-icon");

//generate canvas
statIcons.forEach( (x,i) => {
    const context = x.getContext("2d");
    const img = new Image();
    img.addEventListener("load", () =>
      context.drawImage(img, 72 * i, 5, 72, 72, 0, 0, 72, 72)
    );
    img.src = "assets/sprite-home.png";
    x.height = "72";
    x.width = "72";
});
