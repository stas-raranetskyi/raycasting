class Vector{
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }

    set(x, y){
        this.x = x;
        this.y = y;
    }

    get(){
        return {x: thix.x, y: this.y};
    }
}

const createVector = (x, y) => {
    return new Vector(x, y);
}

function getMousePos(canvas, e) {
    try{
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        return createVector(x, y);
    }
    catch{
        return createVector();
    }
}

const random = (min, max = min)  => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const line = (ctx, x1, y1, x2, y2, width = 1, color = '#ffffff') => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

const circle = (ctx, x, y, r, color = '#ffffff') => {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}

function radians(degrees){
    return degrees * Math.PI / 180;
}

const fromAngle = (angle, length = 1) => {
    if (typeof length === 'undefined') {
      length = 1;
    }
    return createVector(length * Math.cos(angle), length * Math.sin(angle));
};

const dist = (v1, v2) => {
    try{
        var a = v1.x - v2.x;
        var b = v1.y - v2.y;
        return Math.sqrt(a * a + b * b);
    }
    catch{
        return 0;
    }
}
