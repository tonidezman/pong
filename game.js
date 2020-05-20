class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.entities = [];
  }

  updateAndDraw() {
    this.entities.forEach((entity) => {
      entity.update();
      entity.draw();
    });
  }

  start() {
    let fps = 60;
    let interval = Math.floor(1000 / fps);
    setInterval(this.updateAndDraw.bind(this), interval);
  }
}

export default Game;
