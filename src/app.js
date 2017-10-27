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
  const selectScore = (type, category, value) => {
    gameControls.addScore(type, category, value);
  };
  const setupEventListeners = () => {
    document.querySelector('.roll-btn').addEventListener('click', roll);

    document.querySelector('.scorecard').addEventListener('click', (e) => {
      const element = e.toElement;
      const sectionID = element.parentElement.id;
      const category = element.classList[0];
      const value = parseFloat(element.innerText);
      if (availableScores.includes(category) && element.classList[1] !== 'scored') {
        selectScore(sectionID, category, value);
      }
    });
  };
  return {
    init() {
      gameControls.start();
      setupEventListeners();
      availableScores = gameControls.DOMstrings();
    },
  };
})(Game);

controller.init();
