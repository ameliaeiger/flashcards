const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe("Game", ()=> {

  beforeEach(() => {


});

  it("should be a function", ()=> {
      expect(Game).to.be.a("function")

  })
  it("should create cards", ()=> {
    let game = new Game(0)
    game.generateRound()
    // console.log(game.cards.length)
    // game.start()
    expect(game.cards.length).to.equal(30)

  })
  it.skip("should invoke printMessage", ()=> {
    let game = new Game(0)
    console.log(game.message)
      expect().to.be.equal(`Welcome to FlashCards! You are playing with 30 cards.-----------------------------------------------------------------------`)
  })
  it.skip("should invoke printQuestion", ()=> {
    let game = new Game(0)
    game.generateRound()
    expect(game.)
      // expect(game.start()).to.be.equal(`Welcome to FlashCards! You are playing with 30 cards.-----------------------------------------------------------------------`)
  })

});






// IT BLOCK

// it("", ()=> {
//     expect().to.be.a("function")
// })
