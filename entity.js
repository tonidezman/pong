class Entity {
  constructor(game) {
    this.game = game;
    this.color = 'white';
  }

  intersect(other) {
    return (
      this.y + this.height > other.y &&
      this.y < other.y + other.height &&
      this.x + this.width > other.x &&
      this.x < other.x + other.width
    );
  }
}

export default Entity;
