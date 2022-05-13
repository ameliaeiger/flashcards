const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe("Round", ()=> {

    let card1
    let card2
    let card3
    let deck
    // let guess
    let round
    let incorrectTurn
    let incorrectRound

    beforeEach(() => {

    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck = new Deck([card1, card2, card3]);
    // turn = new Turn("sea otter", deck.cards[0]);
    // incorrectTurn = new Turn("pug", deck.cards[0]);
    round = new Round(deck);
    incorrectRound = new Round(deck);

  });

  it("should be a function", ()=> {
        expect(Round).to.be.a("function");

  });
  it("should return the current card being played", ()=> {

        expect(round.returnCurrentCard()).to.equal(deck.cards[0])

  });
  it("should add to turn count", ()=> {
        round.takeTurn("sea otter");
        expect(round.turns).to.equal(1);

  });
  it("should update the current card when a turn is taken", ()=> {
        round.takeTurn("sea otter");
        expect(round.returnCurrentCard()).to.equal(deck.cards[1]);

  });
  it ("should evaluate/record a guess (id is stored)", ()=> {
        round.takeTurn("sea otter");
        incorrectRound.takeTurn("pug");

        expect(round.incorrectGuesses.length).to.equal(0);
        expect(incorrectRound.incorrectGuesses.length).to.equal(1);

  });
  it("should provide feedback for guesses", ()=> {
        expect(round.takeTurn("sea otter")).to.equal("Correct!")
        expect(incorrectRound.takeTurn("pug")).to.equal("Incorrect!")

  });
  it("should calculate percentage of correct guesses", ()=> {
        round.takeTurn("sea otter");
        incorrectRound.takeTurn("pug");

        expect(round.calculatePercentCorrect()).to.equal(100)
        expect(incorrectRound.calculatePercentCorrect()).to.equal(67)

  });
  it("should print a string to the console at the end of the round", ()=> {
        round.takeTurn("sea otter");
        incorrectRound.takeTurn("pug");

        expect(round.calculatePercentCorrect()).to.equal(100)
        expect(incorrectRound.calculatePercentCorrect()).to.equal(67)
        expect(incorrectRound.endRound()).to.equal("You answered 67% of the questions correctly!")

  });
});
