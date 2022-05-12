const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe("Round", function(){

  let card1
  let card2
  let card3

  let deck

  beforeEach(() => {

  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

  deck = new Deck([card1, card2, card3]);
});

//   1. Should be a function
  it.skip("should be a function", function(){

    expect(Round).to.be.a("function");
  });
//   2. Should return current card
  it("should return the current card being played", function(){

    let turn = new Turn("sea otter", deck.cards[0]);
    let round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(deck.cards[0])
  });
//  3. Should add to turn count
  it("should add to turn count", function(){

    let turn = new Turn("sea otter", deck);
    let round = new Round(deck);

    round.takeTurn(turn);

    expect(round.turns).to.equal(1);
  });
 // 4. Should update current card when turn is taken
  it("should update the current card when a turn is taken", function(){

    let turn = new Turn("sea otter", deck.cards[0]);
    let round = new Round(deck);

    round.takeTurn(turn);

    expect(round.currentCard).to.equal(deck.cards[1]);
  });

  it ("should evaluate/record a guess (id is stored)", function(){

    let turn = new Turn("sea otter", deck.cards[0]);
    let incorrectTurn = new Turn("pug", deck.cards[0]);

    let round = new Round(deck);
    let incorrectRound = new Round(deck);

    round.takeTurn(turn);
    incorrectRound.takeTurn(incorrectTurn);

    expect(round.incorrectGuesses.length).to.equal(0);
    expect(incorrectRound.incorrectGuesses.length).to.equal(1);
});

  it("should provide feedback for guesses", function(){

    let turn = new Turn("sea otter", deck.cards[0]);
    let incorrectTurn = new Turn("pug", deck.cards[0]);

    let round = new Round(deck);
    let incorrectRound = new Round(deck);

    expect(round.takeTurn(turn)).to.equal("Correct!")
    expect(incorrectRound.takeTurn(incorrectTurn)).to.equal("Incorrect!")
  });
  it("should calculate percentage of correct guesses", function(){

    let turn = new Turn("sea otter", deck.cards[0]);
    let incorrectTurn = new Turn("pug", deck.cards[0]);

    let round = new Round(deck);
    let incorrectRound = new Round(deck);

    round.takeTurn(turn);
    incorrectRound.takeTurn(incorrectTurn);

    expect(round.calculatePercentCorrect()).to.equal(100)
    expect(incorrectRound.calculatePercentCorrect()).to.equal(67)
  });
  // CURRENT
  it("should print a string to the console at the end of the round", function(){

    let turn = new Turn("sea otter", deck.cards[0]);
    let incorrectTurn = new Turn("pug", deck.cards[0]);

    let round = new Round(deck);
    let incorrectRound = new Round(deck);

    round.takeTurn(turn);
    incorrectRound.takeTurn(incorrectTurn);

    expect(round.calculatePercentCorrect()).to.equal(100)
    expect(incorrectRound.calculatePercentCorrect()).to.equal(67)
    expect(incorrectRound.endRound()).to.equal("You answered 67% of the questions correctly!")
  });
});
