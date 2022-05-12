class Turn{
  constructor(guess, cardObject){
    this.guess = guess;
    this.cardObject = cardObject;
  }
  returnGuess(){
    return this.guess;
  }
  returnCard(){
    return this.cardObject;
  }
  evaluateGuess(){
    if(this.guess == this.cardObject.correctAnswer){
      return true;
    } else {
      return false;
    }
  }
  giveFeedback(){
    if (this.evaluateGuess()){
      return "Correct!"
    } else {
      return "Incorrect!"
    }
  }
}


module.exports = Turn;
