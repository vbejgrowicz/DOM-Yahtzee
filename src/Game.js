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
  let gameStatus;

  const initScores = () => {
    categories = Game.DOMstrings();
    gameStatus = 'new';
    gameScore = [];
    totals = {
      upperTotal: 0,
      upperBonus: 0,
      lowerTotal: 0,
      total: 0,
      highScore: localStorage.getItem('score') || 0,
    };
  };
  const totalScores = (addedScore) => {
    totals[`${addedScore.type}Total`] += addedScore.value;
    if (totals.upperTotal > 62 && totals.upperBonus !== 35) {
      totals.upperBonus = 35;
      totals.total += totals.upperBonus;
    }
    totals.total += addedScore.value;
  };
  const initTurn = () => {
    rollData = Turn.init();
    DisplayTurn.init(rollData);
  };
  const checkYahtzee = () => {
    const diceArr = rollData.dice.map(die => die.value);
    const isUnique = [...new Set(diceArr)];
    if (isUnique.length === 1) {
      return true;
    }
    return false;
  };
  const yahtzeeScored = () => {
    const findYahtzee = el => Object.values(el).includes('yahtzee');
    if (gameScore.findIndex(findYahtzee) !== -1) {
      return true;
    }
    return false;
  };
  return {
    start() {
      initScores();
      initTurn();
      DisplayTurn.game(gameStatus);
      DisplayScores.updateScoreboard(gameStatus, totals);
    },
    addScore(type, category) {
      const newScore = new Score(type, category, rollData.dice);
      gameScore.push(newScore);
      totalScores(newScore);
      gameStatus = DisplayScores.addScore(newScore, totals, gameStatus);
      if (gameStatus === 'active') {
        initTurn();
      } else {
        DisplayTurn.game(gameStatus, totals);
      }
    },
    roll() {
      gameStatus = 'active';
      if (rollData.rollCount > 0) {
        DisplayScores.updateScoreboard(gameStatus, totals);
        rollData.rollCount -= 1;
        const roll = () => {
          rollData.dice = Turn.rollDice(rollData.dice);
          DisplayTurn.turnInfo(rollData);
        };
        const rollAnim = setInterval(roll, 50);
        setTimeout(() => {
          clearInterval(rollAnim);
          this.getScores();
        }, 600);
      }
    },
    holdToggle(diceNum) {
      rollData.dice[diceNum] = Turn.holdDice(rollData.dice[diceNum]);
      DisplayTurn.holdDice(diceNum);
    },
    getScores() {
      calcScore = [];
      const isYahtzee = checkYahtzee();
      const isScored = yahtzeeScored();
      if (isYahtzee && !isScored) {
        DisplayTurn.yahtzee('show', rollData.dice);
        setTimeout(() => {
          this.addScore('lower', 'yahtzee');
        }, 1000);
      } else {
        if (isYahtzee) {
          DisplayTurn.yahtzee('show', rollData.dice);
        }
        categories.forEach((category) => {
          const newCalc = new Score(null, category, rollData.dice);
          calcScore.push(newCalc);
        });
        this.updateCalcScores();
      }
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
