let canvas = document.getElementById("canvas__1");
if (canvas.getContext) {
    let ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(190, 230, 100, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = "rgb(145,203,215)";
    ctx.fill();

    // mouth
    ctx.beginPath();
    ctx.scale(1, 0.45);
    ctx.arc(150, 600, 30, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(51,88,107)";
    ctx.stroke();

    //eye
    ctx.beginPath();
    ctx.scale(0.6, 0.95);
    ctx.arc(200, 490, 20, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.strokeStyle = "rgb(51,88,107)";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(290, 490, 20, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.strokeStyle = "rgb(51,88,107)";
    ctx.stroke();

    //зрачки
    ctx.beginPath();
    ctx.scale(0.8, 1);
    ctx.arc(250, 490, 15, 10, Math.PI);
    ctx.closePath();
    ctx.fillStyle = "rgb(51,88,107)";
    ctx.fill();

    ctx.beginPath();
    ctx.scale(0.9, 1);
    ctx.arc(400, 490, 15, 10, Math.PI);
    ctx.closePath();
    ctx.fillStyle = "rgb(51,88,107)";
    ctx.fill();

    //hat
    ctx.beginPath();
    ctx.moveTo(330, 350);
    ctx.quadraticCurveTo(330, 350, 330, 200);
    ctx.quadraticCurveTo(330, 200, 450, 200);
    ctx.quadraticCurveTo(450, 200, 450, 350);
    ctx.quadraticCurveTo(450, 350, 330, 350);
    ctx.strokeStyle = ("black");
    ctx.stroke();
    ctx.fillStyle = "rgb(51,88,107)";
    ctx.fill();


    ctx.beginPath();
    ctx.scale(1.2, 0.3);
    ctx.arc(350, 1170, 150, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "rgb(51,88,107)";
    ctx.fill();


    //ctx.clip();

    ctx.beginPath();
    ctx.scale(1, 1.7);
    ctx.arc(324, 379, 50, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "rgb(51,88,107)";
    ctx.fill();
    ctx.strokeStyle = ("black");
    ctx.stroke();

    //noise

    ctx.beginPath();
    ctx.moveTo(250, 1140);
    ctx.lineTo(200, 1100);
    ctx.lineTo(260, 1100);
    ctx.strokeStyle = ("black");
    ctx.stroke();



}