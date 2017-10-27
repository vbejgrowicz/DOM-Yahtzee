import DisplayScores from './DisplayScores';
import Score from './Score';

const Game = (() => {
  let gameScore;
  let calcScore;

  return {
    start() {
      gameScore = [];
      calcScore = [];
      DisplayScores.init();
    },
    addScore(category, val) {
      const newScore = new Score(category, val);
      gameScore.push(newScore);
      DisplayScores.addScore(category, val);
    },
    roll() {
      // remove tests and calculate all possible scores from dice
      let newCalc = new Score('five', 15);
      calcScore.push(newCalc);
      newCalc = new Score('one', 1);
      calcScore.push(newCalc);
      newCalc = new Score('fullhouse', 25);
      calcScore.push(newCalc);
      DisplayScores.calc(calcScore);
    },
    DOMstrings() {
      return DisplayScores.getDOMstrings();
    },
  };
})();

export default Game;
