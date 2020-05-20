class Background {
  constructor(game) {
    this.game = game;
  }

  update() {
    // do nothing
  }

  draw() {
    this.game.ctx.fillStyle = 'black';
    this.game.ctx.fillRect(
      0,
      0,
      this.game.canvas.width,
      this.game.canvas.height
    );
  }
}

export default Background;
