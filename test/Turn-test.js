const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');

describe("Turn", function(){

  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

  let deck = new Deck([card1, card2, card3]);

  it.skip("should be a function", function(){

    expect(Turn).to.be.a("function");
  });
  it("should accept a guess", function(){

    let turn = new Turn("blue?");

    expect(turn.guess).to.equal("blue?");
  })
  it("should accept a card object", function(){

// console.log(deck.cards[0])
    let turn = new Turn("sea otter", deck.cards[0]);
    let round = new Round(deck, turn.returnGuess(), turn.evaluateGuess())

    expect(turn.cardObject).to.equal(card1);
  })
  it("should return the guess", function(){

    let turn = new Turn("sea otter", deck.cards[0]);

    expect(turn.returnGuess()).to.equal("sea otter");
  })
  it("should return the card", function(){

    let turn = new Turn("sea otter", deck.cards[0]);

    expect(turn.returnCard()).to.equal(deck.cards[0]);
  })
  it("should return true if guess is correct", function(){

    let turnCorrect = new Turn("sea otter", deck.cards[0]);
    let turnIncorrect = new Turn("pug", deck.cards[0]);

    expect(turnCorrect.evaluateGuess()).to.equal(true);
    expect(turnIncorrect.evaluateGuess()).to.equal(false);
  })
  it("should give correct feedback", function(){

    let turnCorrect = new Turn("sea otter", deck.cards[0]);
    let turnIncorrect = new Turn("pug", deck.cards[0]);

    expect(turnCorrect.giveFeedback()).to.equal("Correct!");
    expect(turnIncorrect.giveFeedback()).to.equal("Incorrect!");
  })
  it("should give correct feedback", function(){

    let turnCorrect = new Turn("sea otter", deck.cards[0]);
    let turnIncorrect = new Turn("pug", deck.cards[0]);

    expect(turnCorrect.giveFeedback()).to.equal("Correct!");
    expect(turnIncorrect.giveFeedback()).to.equal("Incorrect!");
  })
});
