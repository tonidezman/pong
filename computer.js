import Paddle from './paddle.js';

class Computer extends Paddle {
  constructor(game, ball) {
    super(game);
    this.ball = ball;
    this.yVelocity = 5;
  }
}

export default Computer;
