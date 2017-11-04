import '../style/style.css';
import '../assets/dice-1.png';
import '../assets/dice-2.png';
import '../assets/dice-3.png';
import '../assets/dice-4.png';
import '../assets/dice-5.png';
import '../assets/dice-6.png';
import '../assets/Fives.png';
import '../assets/LargeStraight.png';
import '../assets/Ones_Fullhouse.png';
import '../assets/Sixes_FourKind.png';
import '../assets/SmallStraight.png';
import '../assets/ThreeKind.png';
import '../assets/Twos_Fours.png';
import '../assets/Yahtzee.png';

import Game from './Game';

const controller = ((gameControls) => {
  let availableScores;
  const roll = () => {
    gameControls.roll();
  };
  const newGame = () => {
    gameControls.start();
  };
  const rules = () => {
    document.querySelector('.rules').classList.toggle('open');
  };
  const selectScore = (type, category, value) => {
    gameControls.addScore(type, category, value);
  };
  const setupEventListeners = () => {
    document.querySelector('.roll-btn').addEventListener('click', roll);
    document.querySelector('.new-game-btn').addEventListener('click', newGame);
    document.querySelector('.seeRules').addEventListener('click', rules);
    document.querySelector('.close-btn').addEventListener('click', rules);

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
