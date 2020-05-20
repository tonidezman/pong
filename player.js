import Paddle from './paddle.js';

class Player extends Paddle {
  constructor(game) {
    super(game);
    this.isMoving = false;
    this.moveUp = false;
    this.game.canvas.addEventListener('keydown', (e) => {
      if (e.key === this.up) {
        this.isMoving = true;
        this.moveUp = true;
      } else if (e.key === this.down) {
        this.isMoving = true;
        this.moveUp = false;
      }
    });

    this.game.canvas.addEventListener('keyup', (e) => {
      if (e.key === this.up || e.key === this.down) {
        this.isMoving = false;
      }
    });
  }

  update() {
    if (this.isMoving) {
      if (this.moveUp && this.y > 0) {
        this.y -= this.yVelocity;
      } else if (
        !this.moveUp &&
        this.y < this.game.canvas.height - this.height
      ) {
        this.y += this.yVelocity;
      }
    }
  }
}

export default Player;
