"use strict";

const protectRightIcons = document.querySelectorAll("canvas.protect-icon-right");

//generate canvas
protectRightIcons.forEach( (x,i) => {
    const context = x.getContext("2d");
    const img = new Image();
    img.addEventListener("load", () =>
        context.drawImage(img, 5+64*i, 10, 50, 50, 11, 11, 50, 50)
    );
    img.src = "assets/sprite-home-v3.png";
    x.height = "72";
    x.width = "72";
    x.style.height = "72px";
    x.style.width = "72px";
});

const protectLeftIcons = document.querySelectorAll("canvas.protect-icon-left");

//generate canvas
protectLeftIcons.forEach( (x,i) => {
    const context = x.getContext("2d");
    const img = new Image();
    img.addEventListener("load", () =>
        context.drawImage(img, 5+64*i, 10, 50, 50, 11, 11, 50, 50)
    );
    img.src = "assets/sprite-home-v3.png";
    x.height = "72";
    x.width = "72";
    x.style.height = "72px";
    x.style.width = "72px";
});
