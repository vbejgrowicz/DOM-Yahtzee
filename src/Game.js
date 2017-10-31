import DisplayScores from './DisplayScores';
import Score from './Score';
import Dice from './Dice';

const Game = (() => {
  let gameScore;
  let calcScore;
  let totals;
  let rollData;
  let categories;

  const initScores = () => {
    categories = Game.DOMstrings();
    gameScore = [];
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
  const initTurn = () => {
    rollData = Dice.init();
  };
  return {
    start() {
      initScores();
      initTurn();
      DisplayScores.updateScoreboard('new', totals);
    },
    addScore(type, category) {
      const newScore = new Score(type, category, rollData.diceArr);
      gameScore.push(newScore);
      totalScores(newScore);
      DisplayScores.addScore(newScore, totals);
      initTurn();
    },
    roll() {
      if (rollData.rollCount > 0) {
        rollData.diceArr = Dice.rollDice(rollData.diceArr);
        rollData.rollCount -= 1;
        Dice.remaining(rollData.rollCount);
        this.getScores();
      }
    },
    getScores() {
      calcScore = [];
      categories.forEach((category) => {
        const newCalc = new Score(null, category, rollData.diceArr);
        calcScore.push(newCalc);
      });
      this.updateCalcScores();
    },
    updateCalcScores() {
      DisplayScores.showCalc(calcScore);
    },
    DOMstrings() {
      return DisplayScores.getDOMstrings();
    },
  };
})();

export default Game;
