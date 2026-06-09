var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


var x = 200;
var y = 200;
var dx = 4;
var dy = 4;
var clique = 1;

function parar() {
    clique++;
    if (clique % 2 == 0) {
        dx = 0;
        dy = 0;
    }
    else{
        dx = 4;
        dy = 4;
    }
}

function voltar(){
    if (clique == 2){
        dx = 4;
        dy = 4;
        clique = 0;
    }
}

function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, canvas.width, canvas.height);

    c.fillStyle = 'blue';
    c.fillRect(x, y, 200, 200);

    if (x + 200 >= canvas.width) {
        dx = -dx;
    }

    if (x <= 0) {
        dx = -dx;
    }

    if (y + 200 >= canvas.height) {
        dy = -dy;
    }

    if (y <= 0) {
        dy = -dy;
    }

    y += dy;
    x += dx;


}

animate();
