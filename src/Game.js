import DisplayScores from './DisplayScores';
import Score from './Score';
import Dice from './Dice';

const Game = (() => {
  let gameScore;
  let calcScore;
  let totals;
  let rollData;

  const initScores = () => {
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
      rollData = Dice.init();
    },
    addScore(type, category) {
      const newScore = new Score(type, category, rollData.diceArr);
      gameScore.push(newScore);
      totalScores(newScore);
      DisplayScores.updateTotals(totals);
      DisplayScores.addScore(newScore);
      rollData = Dice.init();
    },
    roll() {
      if (rollData.rollCount > 0) {
        rollData.diceArr = Dice.rollDice(rollData.diceArr);
        rollData.rollCount -= 1;
        Dice.remaining(rollData.rollCount);
        // remove tests and calculate all possible scores from dice
        let newCalc = new Score('upper', 'five', 15);
        calcScore.push(newCalc);
        newCalc = new Score('upper', 'one', 1);
        calcScore.push(newCalc);
        newCalc = new Score('lower', 'fullhouse', 25);
        calcScore.push(newCalc);
        DisplayScores.calc(calcScore);
      }
    },
    DOMstrings() {
      return DisplayScores.getDOMstrings();
    },
  };
})();

export default Game;
