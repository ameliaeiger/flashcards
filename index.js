// This is where your project starts.

const Turn = require('./src/Turn');
const Card = require('./src/Card');
const Deck = require('./src/Deck');
const Round = require('./src/Round');
const Game = require('./src/Game');


console.log('Your project is running...');

let game = new Game(0)

game.start()
