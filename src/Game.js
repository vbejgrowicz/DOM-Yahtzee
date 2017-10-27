import Scorecard from './Scorecard';
import DisplayScores from './DisplayScores';

export default class Game {
  static start() {
    const gameScore = new Scorecard();
    DisplayScores.all(gameScore);
    return gameScore;
  }
  static addScore(category, val) {
    DisplayScores.addScore(category, val);
  }
  static roll() {
    const calcScore = new Scorecard();
    calcScore.two = 4;
    calcScore.five = 5;
    // todo: remove defaults and calculate all possible scores from dice
    DisplayScores.all(calcScore);
  }
}
