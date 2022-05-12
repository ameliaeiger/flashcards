const Turn = require('../src/Turn');


class Round {
    constructor(deck) {
      this.deck = deck;
      this.currentCard = this.deck.cards[0];
      this.turns = 0;
      this.incorrectGuesses = [];
  }
    returnCurrentCard() {
      let num = this.turns
      this.currentCard = this.deck.cards[num]
      return this.currentCard
  }
    takeTurn(turn) {
      this.turns += 1;
      let feedback = turn.giveFeedback()
      if (!turn.evaluateGuess()) {
        this.incorrectGuesses.push(this.currentCard.id)
        return feedback
      } else {
        this.returnCurrentCard();
        return feedback
    }
  }
  calculatePercentCorrect() {
    let sumIncorrect = this.incorrectGuesses.length
    let sumDeck = this.deck.countCards()
    let correctGuesses = sumDeck-sumIncorrect
    let percentCorrect = correctGuesses/sumDeck * 100
    return Math.round(percentCorrect)
  }
  endRound() {
    return `You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    // print calculatePercentCorrect()
  }
}


module.exports = Round;
