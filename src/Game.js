import DisplayScores from './DisplayScores';
import Score from './Score';
import Dice from './Dice';

const Game = (() => {
  let gameScore;
  let calcScore;
  let totals;
  let dice;

  const initScores = () => {
    dice = [0, 0, 0, 0, 0];
    gameScore = [];
    calcScore = [];
    totals = {
      upperTotal: 0,
      upperBonus: 0,
      lowerTotal: 0,
      total: 0,
    };
  };
  const totalScores = (addedScore) => {
    totals[`${addedScore.type}Total`] += addedScore.value;
    totals.total += addedScore.value;
  };
  return {
    start() {
      initScores();
      DisplayScores.init();
      DisplayScores.updateTotals(totals);
      Dice.display(dice, 'hide');
    },
    addScore(type, category, val) {
      const newScore = new Score(type, category, val);
      gameScore.push(newScore);
      totalScores(newScore);
      DisplayScores.updateTotals(totals);
      DisplayScores.addScore(newScore);
    },
    roll() {
      // remove tests and calculate all possible scores from dice
      let newCalc = new Score('upper', 'five', 15);
      calcScore.push(newCalc);
      newCalc = new Score('upper', 'one', 1);
      calcScore.push(newCalc);
      newCalc = new Score('lower', 'fullhouse', 25);
      calcScore.push(newCalc);
      DisplayScores.calc(calcScore);
    },
    DOMstrings() {
      return DisplayScores.getDOMstrings();
    },
  };
})();

export default Game;
