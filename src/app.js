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
  return {
    init() {
      gameControls.start();
      availableScores = gameControls.DOMstrings();
    },
  };
})(Game);

controller.init();
