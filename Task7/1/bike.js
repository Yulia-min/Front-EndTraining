let canvas = document.getElementById("canvas__2");
if (canvas.getContext) {
    let ctx = canvas.getContext("2d");

    // circle

    ctx.beginPath();
    ctx.arc(150, 400, 60, Math.PI * 2, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgb(51,88,107)";
    ctx.stroke();
    ctx.fillStyle = "rgb(145,203,215)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(450, 400, 60, Math.PI * 2, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgb(51,88,107)";
    ctx.stroke();
    ctx.fillStyle = "rgb(145,203,215)";
    ctx.fill();

    //main part

    ctx.beginPath();
    ctx.moveTo(450, 400);
    ctx.lineTo(420, 280);
    ctx.lineTo(460, 240);
    ctx.moveTo(420, 280);
    ctx.lineTo(390, 250);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(51,88,107)";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(150, 400);
    ctx.lineTo(300, 400);
    ctx.lineTo(430, 320);
    ctx.lineTo(230, 320);
    ctx.lineTo(150, 400);
    ctx.moveTo(300, 400);
    ctx.lineTo(210, 300);
    ctx.moveTo(190, 300);
    ctx.lineTo(240, 300);
    ctx.moveTo(284, 390);
    ctx.lineTo(260, 370);
    ctx.moveTo(315, 415);
    ctx.lineTo(340, 430);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(51,88,107)";
    ctx.stroke();



    ctx.beginPath();
    ctx.arc(300, 400, 20, Math.PI * 2, false);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(51,88,107)";
    ctx.stroke();






}