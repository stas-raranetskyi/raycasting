import { line, circle, createVector, radians, dist} from './main';
import Ray from './ray';

export default class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.rays = [];
        for (let a = 0; a < 360; a += 1) {
            this.rays.push(new Ray(this.pos, radians(a)));
        }
    }

    update(x, y) {
        this.pos.set(x, y);
    }

    look(walls, ctx) {
        for (let i = 0; i < this.rays.length; i++) {
            const ray = this.rays[i];
            let closest = null;
            let record = Infinity;
            for (let wall of walls) {
                const pt = ray.cast(wall);
                if (pt) {
                    const d = dist(this.pos, pt);
                    if (d < record) {
                        record = d;
                        closest = pt;
                    }
                }
            }
            if (closest) {
                line(ctx, this.pos.x, this.pos.y, closest.x, closest.y);
            }
        }
    }

    show(cxt) {
        circle(cxt, this.pos.x, this.pos.y, 8);
        for (let ray of this.rays) {
            ray.show(cxt);
        }
    }
  }
