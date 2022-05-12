const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

describe("Turn", ()=> {

  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

  let deck = new Deck([card1, card2, card3]);
  let turn = new Turn("sea otter", deck.cards[0]);
  let turnIncorrect = new Turn("pug", deck.cards[0]);


  it("should be a function", ()=> {
      expect(Turn).to.be.a("function");
  });
  it("should accept a guess", ()=> {
      expect(turn.guess).to.equal("sea otter");
  })
  it("should accept a card object", ()=> {
      let round = new Round(deck, turn.returnGuess(), turn.evaluateGuess())
      expect(turn.cardObject).to.equal(card1);
  })
  it("should return the guess", ()=> {
      expect(turn.returnGuess()).to.equal("sea otter");
  })
  it("should return the card", ()=> {
      expect(turn.returnCard()).to.equal(deck.cards[0]);
  })
  it("should return true if guess is correct", ()=> {
      expect(turn.evaluateGuess()).to.equal(true);
      expect(turnIncorrect.evaluateGuess()).to.equal(false);
  })
  it("should give correct feedback", ()=> {
      expect(turn.giveFeedback()).to.equal("Correct!");
      expect(turnIncorrect.giveFeedback()).to.equal("Incorrect!");
  })
  it("should give correct feedback", ()=> {
      expect(turn.giveFeedback()).to.equal("Correct!");
      expect(turnIncorrect.giveFeedback()).to.equal("Incorrect!");
  })
});
