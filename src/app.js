import '../style/style.css';
import '../dice/dice-1.png';
import '../dice/dice-2.png';
import '../dice/dice-3.png';
import '../dice/dice-4.png';
import '../dice/dice-5.png';
import '../dice/dice-6.png';
import Game from './Game';

const controller = ((gameControls) => {
  let availableScores;
  const roll = () => {
    gameControls.roll();
  };
  const newGame = () => {
    gameControls.start();
  };
  const selectScore = (type, category, value) => {
    gameControls.addScore(type, category, value);
  };
  const setupEventListeners = () => {
    document.querySelector('.roll-btn').addEventListener('click', roll);
    document.querySelector('.new-game-btn').addEventListener('click', newGame);

    document.querySelector('.scorecard').addEventListener('click', (e) => {
      const scorecard = e.target.offsetParent.className;
      const sectionID = e.target.parentElement.id;
      const category = e.target.className;
      if (scorecard.includes('active') && availableScores.includes(category) && !category.includes('scored')) {
        selectScore(sectionID, category);
      }
    });
    const diceArr = Array.from(document.querySelectorAll('.dice'));
    diceArr.forEach((die) => {
      die.addEventListener(('click'), (e) => {
        const diceNum = e.target.id;
        gameControls.holdToggle(diceNum);
      });
    });
  };
  return {
    init() {
      newGame();
      setupEventListeners();
      availableScores = gameControls.DOMstrings();
    },
  };
})(Game);

controller.init();
