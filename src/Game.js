import DisplayScores from './DisplayScores';
import Score from './Score';
import Turn from './Turn';
import DisplayTurn from './DisplayTurn';

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
    rollData = Turn.init();
    DisplayTurn.init(rollData);
  };
  return {
    start() {
      initScores();
      initTurn();
      DisplayScores.updateScoreboard('new', totals);
    },
    addScore(type, category) {
      const newScore = new Score(type, category, rollData.dice);
      gameScore.push(newScore);
      totalScores(newScore);
      DisplayScores.addScore(newScore, totals);
      initTurn();
    },
    roll() {
      if (rollData.rollCount > 0) {
        rollData = Turn.rollDice(rollData);
        DisplayTurn.turnInfo(rollData);
        this.getScores();
      }
    },
    getScores() {
      calcScore = [];
      categories.forEach((category) => {
        const newCalc = new Score(null, category, rollData.dice);
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
