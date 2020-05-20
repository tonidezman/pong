import Entity from './entity.js';

class Paddle extends Entity {
  constructor(game) {
    super(game);
    this.width = 20;
    this.height = 100;
    this.x = 0;
    this.y = (this.game.canvas.height - this.height) / 2;
    this.xVelocity = 0;
    this.yVelocity = 10;
  }

  draw() {
    this.game.ctx.fillStyle = this.color;
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default Paddle;
