var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var shapes = [];

for (var i = 0; i < 10; i++){
    shapes.push({
        type: 'rect',
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        width: 100,
        height: 100,
        color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    });
}

for (var i = 0; i < 10; i++){
    shapes.push({
        type: 'line',
        x1: Math.random() * window.innerWidth,
        y1: Math.random() * window.innerHeight,
        x2: Math.random() * window.innerWidth,
        y2: Math.random() * window.innerHeight,
        vx1: (Math.random() - 0.5) * 4,
        vy1: (Math.random() - 0.5) * 4,
        vx2: (Math.random() - 0.5) * 4,
        vy2: (Math.random() - 0.5) * 4,
        color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    });
}
for (var i = 0; i < 30; i++){
    shapes.push({
        type: 'circle',
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 50,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    });
}

function animate(){
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    for (var i = 0; i < shapes.length; i++){
        var shape = shapes[i];
        
        if (shape.type === 'rect'){
            shape.x += shape.vx;
            shape.y += shape.vy;
            
            if (shape.x < 0 || shape.x + shape.width > window.innerWidth) shape.vx *= -1;
            if (shape.y < 0 || shape.y + shape.height > window.innerHeight) shape.vy *= -1;
            
            c.fillStyle = shape.color;
            c.fillRect(shape.x, shape.y, shape.width, shape.height);
        }
        
        if (shape.type === 'line'){
            shape.x1 += shape.vx1;
            shape.y1 += shape.vy1;
            shape.x2 += shape.vx2;
            shape.y2 += shape.vy2;
            
            if (shape.x1 < 0 || shape.x1 > window.innerWidth) shape.vx1 *= -1;
            if (shape.y1 < 0 || shape.y1 > window.innerHeight) shape.vy1 *= -1;
            if (shape.x2 < 0 || shape.x2 > window.innerWidth) shape.vx2 *= -1;
            if (shape.y2 < 0 || shape.y2 > window.innerHeight) shape.vy2 *= -1;
            
            c.beginPath();
            c.moveTo(shape.x1, shape.y1);
            c.lineTo(shape.x2, shape.y2);
            c.strokeStyle = shape.color;
            c.stroke();
        }
        
        if (shape.type === 'circle'){
            shape.x += shape.vx;
            shape.y += shape.vy;
            
            if (shape.x - shape.radius < 0 || shape.x + shape.radius > window.innerWidth) shape.vx *= -1;
            if (shape.y - shape.radius < 0 || shape.y + shape.radius > window.innerHeight) shape.vy *= -1;
            
            c.beginPath();
            c.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2, false);
            c.strokeStyle = shape.color;
            c.stroke();
        }
    }
    
    requestAnimationFrame(animate);
}

animate();  