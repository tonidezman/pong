import Computer from './computer.js';

class Computer2 extends Computer {
  constructor(game, ball) {
    super(game, ball);
    this.x = this.game.canvas.width - 50;
  }

  update() {
    const canMove = this.ball.x >= this.game.canvas.width / 2;
    if (!canMove) return;

    if (this.ball.y > this.y) {
      this.y += this.yVelocity;
    } else {
      this.y -= this.yVelocity;
    }
  }
}

export default Computer2;
