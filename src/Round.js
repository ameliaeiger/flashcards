const Turn = require('../src/Turn');


class Round {
    constructor(deck) {
      this.turns = 0;
      this.currentCard = deck.cards;
      this.currentTurn = {};
      this.incorrectGuesses = [];
  }
    returnCurrentCard() {
      return this.currentCard[this.turns]
  }
    takeTurn(guess) {
      this.currentTurn = new Turn(guess, this.returnCurrentCard())
      this.turns += 1;
      if (!this.currentTurn.evaluateGuess()) {
        this.incorrectGuesses.push(this.currentTurn.card.id)
        return this.currentTurn.giveFeedback();
      } else {
        return this.currentTurn.giveFeedback();
    }
  }
  calculatePercentCorrect() {
    let sumIncorrect = this.incorrectGuesses.length
    let sumDeck = this.currentCard.length
    let correctGuesses = sumDeck-sumIncorrect
    let percentCorrect = correctGuesses/sumDeck * 100
    return Math.round(percentCorrect)
  }
  endRound() {
    console.log(`You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}


module.exports = Round;
