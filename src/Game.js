import DisplayScores from './DisplayScores';
import Score from './Score';

const Game = (() => {
  let gameScore;
  let calcScore;

  return {
    start() {
      gameScore = [];
      calcScore = [];
      DisplayScores.init();
    },
  };
})();

export default Game;
