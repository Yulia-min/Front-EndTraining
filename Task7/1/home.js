let canvas = document.getElementById("canvas__3");
if (canvas.getContext) {
    let ctx = canvas.getContext("2d");

    // main

    ctx.beginPath();
    ctx.rect(200, 300, 250, 250);
    ctx.closePath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.stroke();
    ctx.fillStyle = "rgb(151,91,91)";
    ctx.fill();

    // roof

    ctx.beginPath();
    ctx.moveTo(200, 300);
    ctx.lineTo(320, 170);
    ctx.lineTo(450, 300);
    ctx.lineTo(200, 300);
    ctx.lineWidth = 4;
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.stroke();
    ctx.fillStyle = "rgb(151,91,91)";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(350, 250);
    ctx.lineTo(350, 170);
    ctx.lineTo(380, 170);
    ctx.lineTo(380, 250);

    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.stroke();
    ctx.fillStyle = "rgb(151,91,91)";
    ctx.fill();

    // windows

    ctx.beginPath();
    ctx.rect(210, 350, 50, 30);
    ctx.rect(265, 350, 50, 30);
    ctx.rect(265, 385, 50, 30);
    ctx.rect(210, 385, 50, 30);

    ctx.rect(330, 350, 50, 30);
    ctx.rect(385, 350, 50, 30);
    ctx.rect(385, 385, 50, 30);
    ctx.rect(330, 385, 50, 30);

    ctx.rect(330, 430, 50, 30);
    ctx.rect(385, 430, 50, 30);
    ctx.rect(385, 465, 50, 30);
    ctx.rect(330, 465, 50, 30);
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fill();

    //door

    ctx.beginPath();
    ctx.moveTo(230, 550);
    ctx.lineTo(230, 480);

    ctx.moveTo(300, 550);
    ctx.lineTo(300, 480);

    ctx.moveTo(230, 480);
    ctx.arc(265, 480, 35, Math.PI, false);

    ctx.moveTo(265, 550);
    ctx.lineTo(265, 445);

    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(250, 500, 3, 0, Math.PI * 2, false);
    ctx.closePath();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(280, 500, 3, 0, Math.PI * 2, false);
    ctx.closePath();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.stroke();

}