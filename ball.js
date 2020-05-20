import Entity from './entity.js';

class Ball extends Entity {
  constructor(game) {
    super(game);
    this.width = 20;
    this.height = 20;
    this.xVelocity = 6;
    this.yVelocity = 2;
    this.restart();
  }

  restart() {
    // update score
    this.game.score.addPoint(this.x);

    // speedUpGame
    // this.xVelocity *= 0.5;
    // if (this.xVelocity > 15) {
    //   this.xVelocity = 11;
    // }

    this.xVelocity *= -1;

    this.x = this.game.canvas.width / 2 - this.width;
    this.y = this.game.canvas.height / 2 - this.height;
  }

  update() {
    if (this.intersect(this.game.player1) || this.intersect(this.game.player2))
      this.xVelocity *= -1;

    if (this.x < 0 || this.x > this.game.canvas.width) this.restart();
    this.x += this.xVelocity;
    this.y += this.yVelocity;

    if (this.y > this.game.canvas.height - this.height || this.y < 0) {
      this.yVelocity *= -1;
    }
  }

  draw() {
    this.game.ctx.fillStyle = this.color;
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default Ball;
