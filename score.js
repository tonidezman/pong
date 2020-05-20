class Score {
  constructor(game) {
    this.game = game;
    this.player1Points = 0;
    this.player2Points = 0;
  }

  addPoint(x) {
    if (x && x < 0) {
      this.player2Points += 1;
    } else if (x && x > this.game.canvas.width) {
      this.player1Points += 1;
    }
  }

  update() {}

  draw() {
    this.game.ctx.fillStyle = 'white';
    this.game.ctx.font = '30px Arial';
    this.game.ctx.textAlign = 'center';
    this.game.ctx.fillText(
      this.displayPoints(),
      this.game.canvas.width / 2,
      30
    );
  }

  displayPoints() {
    return `${this.player1Points} : ${this.player2Points}`;
  }
}

export default Score;
