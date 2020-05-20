import Player from './player.js';

class Player1 extends Player {
  constructor(game) {
    super(game);
    this.x = 40;
    this.up = 'ArrowLeft';
    this.down = 'ArrowRight';
  }
}

export default Player1;
