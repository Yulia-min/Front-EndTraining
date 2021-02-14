var tank = document.getElementById("tank");


trash.onmousedown = function(event) {

    tank.onmouseover = function() {
        tank.src = "img/2.jpg";
    }

    tank.onmouseup = function() {
        tank.src = "img/2.jpg";
    }

    let shiftX = event.pageX - getCoords(trash).left;
    let shiftY = event.pageY - getCoords(trash).top;

    trash.style.position = "absolute";
    document.body.appendChild(trash);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        trash.style.left = pageX - shiftX + "px";
        trash.style.top = pageY - shiftY + "px";
    }

    onmousemove = function(event) {
        moveAt(event.pageX, event.pageY);
    }

    trash.onmouseup = function() {
        let tankCoord = getCoords(tank),
            trashCoord = getCoords(trash);

        let tankWidth = tankCoord.top + tank.width,
            tankHeight = tankCoord.left + tank.height;

        if (trashCoord.top < tankHeight && trashCoord.left < tankWidth) {
            trash.remove();
        }
        tank.onmouseout = function() {
            tank.src = "img/1.jpg";
        }
    }

}

trash.ondragstart = function() {
    return false;
};

function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}