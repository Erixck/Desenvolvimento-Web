let canvas = document.getElementById("meuCanvas");
let ctx = canvas.getContext("2d");

let modoAtual = 1;
let gravidade = 0.6;
let animacaoLoop;

let teclas = {};

let p1 = { x: 100, y: 300, largura: 40, altura: 40, velX: 0, velY: 0, cor: "blue", pontos: 0 };
let p2 = { x: 650, y: 300, largura: 40, altura: 40, velX: 0, velY: 0, cor: "red", pontos: 0 };

window.addEventListener("keydown", function(evento) {
    teclas[evento.key] = true;
});
window.addEventListener("keyup", function(evento) {
    teclas[evento.key] = false;
});


function iniciarJogo(modo) {
    modoAtual = modo;
    document.getElementById("menu").style.display = "none";
    document.getElementById("areaJogo").style.display = "block";
    
    atualizarJogo();
}

function aplicarFisica(jogador) {
    jogador.velY += gravidade;
    
    jogador.x += jogador.velX;
    jogador.y += jogador.velY;

    if (jogador.y + jogador.altura >= canvas.height) {
        jogador.y = canvas.height - jogador.altura;
        jogador.velY = 0;
    }

    if (jogador.x <= 0) jogador.x = 0;
    if (jogador.x + jogador.largura >= canvas.width) jogador.x = canvas.width - jogador.largura;
}

function verificarColisao() {
    if (p1.x < p2.x + p2.largura && 
        p1.x + p1.largura > p2.x && 
        p1.y < p2.y + p2.altura && 
        p1.y + p1.altura > p2.y) {
        
        if (p1.velY > 0 && p1.y < p2.y) {
            p1.pontos++;
            p1.velY = -12;
            p2.x = 650;
        } 
        else if (p2.velY > 0 && p2.y < p1.y) {
            p2.pontos++;
            p2.velY = -12;
            p1.x = 100;
        } 
        else {
            p1.x -= p1.velX;
            p2.x -= p2.velX;
        }

        document.getElementById("placar").innerHTML = "Jogador Azul: " + p1.pontos + " | Jogador Vermelho: " + p2.pontos;
    }
}

function atualizarJogo() {
    if (teclas["a"] || teclas["A"]) p1.velX = -5;
    else if (teclas["d"] || teclas["D"]) p1.velX = 5;
    else p1.velX = 0;

    if ((teclas["w"] || teclas["W"]) && p1.velY === 0) p1.velY = -12;

    if (modoAtual === 2) {
        if (teclas["ArrowLeft"]) p2.velX = -5;
        else if (teclas["ArrowRight"]) p2.velX = 5;
        else p2.velX = 0;

        if (teclas["ArrowUp"] && p2.velY === 0) p2.velY = -12;
    } else {
        if (p2.x > p1.x) p2.velX = -3; 
        else if (p2.x < p1.x) p2.velX = 3;
        else p2.velX = 0;

        if (Math.random() < 0.03 && p2.velY === 0) p2.velY = -12;
    }

    aplicarFisica(p1);
    aplicarFisica(p2);
    verificarColisao();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = p1.cor;
    ctx.fillRect(p1.x, p1.y, p1.largura, p1.altura);

    ctx.fillStyle = p2.cor;
    ctx.fillRect(p2.x, p2.y, p2.largura, p2.altura);

    requestAnimationFrame(atualizarJogo);
}