
var loop = (function(){
    return requestAnimationFrame ||
        webkitRequestAnimationFrame ||
        mozRequestAnimationFrame ||
        oRequestAnimationFrame ||
        msRequestAnimationFrame
})();

class Raycasting{
    constructor(name){
        this.canvas = document.getElementById(name);
        this.context = this.canvas.getContext('2d');
        this.step;
        this.width = 500;
        this.height = 500;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style.backgroundColor = '#000000';
        this.mousePos = createVector();
        this.walls = [];
        this.particle = new Particle(this.width / 2, this.height / 2);
    }

    draw(){
        this.context.clearRect(0, 0, this.width, this.height);
        for (let wall of this.walls) {
            wall.show(this.context);
        }
        this.particle.update(this.mousePos.x || this.width / 2, this.mousePos.y || this.width / 2);
        this.particle.show(this.context);
        this.particle.look(this.walls, this.context);
    };

    eventsHandlers(){
        this.canvas.onmousemove = (e) => {
            this.mousePos = getMousePos(this.canvas, e);
        };
    }

    step = () => {
        loop(this.step);
		this.draw();
    };

    run(){
        this.eventsHandlers();
        this.step();
        for (let i = 0; i < 3; i++) {
            let x1 = random(0, this.width);
            let x2 = random(0, this.width);
            let y1 = random(0, this.height);
            let y2 = random(0, this.height);
            this.walls[i] = new Boundary(x1, y1, x2, y2);
        }
        this.walls.push(new Boundary(0, 0, this.width, 0));
        this.walls.push(new Boundary(this.width, 0, this.width, this.height));
        this.walls.push(new Boundary(this.width, this.height, 0, this.height));
        this.walls.push(new Boundary(0, this.height, 0, 0));
    }
}

var raycasting = new Raycasting('raycasting');
raycasting.run();
