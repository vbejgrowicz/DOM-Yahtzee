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
  const setupEventListeners = () => {
    document.querySelector('.roll-btn').addEventListener('click', roll);

    document.querySelector('.scorecard').addEventListener('click', (e) => {
      const element = e.toElement;
      if (availableScores.includes(element.classList[0]) && element.classList[1] !== 'scored') {
        selectScore(element.classList[0], element.innerText);
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
