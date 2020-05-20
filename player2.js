import Player from './player.js';

class Player2 extends Player {
  constructor(game) {
    super(game);
    this.x = this.game.canvas.width - 50;
    this.up = 'ArrowUp';
    this.down = 'ArrowDown';
  }
}

export default Player2;
