const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor(round) {
    this.currentRound = round;
    this.cards = [];
    this.deck = {};
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
      util.main(round);
  }
  generateRound() {
    this.cards = prototypeQuestions.map((card) =>
      new Card(card.id, card.question, card.answers, card.correctAnswer)
    )
    this.deck = new Deck(this.cards)
    this.currentRound = new Round(this.deck)
  }
  start(){
    this.generateRound()
    this.printMessage(this.deck, this.currentRound)
    this.printQuestion(this.currentRound)
  }
}

module.exports = Game;
