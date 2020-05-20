import Background from './background.js';
import Ball from './ball.js';
import Player1 from './player1.js';
import Player2 from './player2.js';
import Computer1 from './computer1.js';
import Computer2 from './computer2.js';
import Game from './game.js';
import Score from './score.js';

let canvas = document.getElementById('pong-canvas');
canvas.focus();

let urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get('mode');

let game = new Game(canvas);
let score = new Score(game);
game.score = score;
let ball = new Ball(game);

let player1;
let player2;
switch (mode) {
  case '1player':
    player1 = new Computer1(game, ball);
    player2 = new Player2(game);
    break;
  case '2players':
    player1 = new Player1(game);
    player2 = new Player2(game);
    break;
  case '2computers':
    player1 = new Computer1(game, ball);
    player2 = new Computer2(game, ball);
}

game.player1 = player1;
game.player2 = player2;

game.entities = [new Background(game), score, ball, player1, player2];

game.start();
