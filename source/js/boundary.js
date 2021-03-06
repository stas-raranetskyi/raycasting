import { line, createVector} from './main';
export default class Boundary {
    constructor(x1, y1, x2, y2) {
      this.a = createVector(x1, y1);
      this.b = createVector(x2, y2);
    }

    show(ctx) {
        line(ctx, this.a.x, this.a.y, this.b.x, this.b.y, 2)
    }
  }
