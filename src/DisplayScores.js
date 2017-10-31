const DOMstrings = ['one', 'two', 'three', 'four', 'five', 'six', 'threekind', 'fourkind', 'fullhouse', 'smStraight', 'lgStraight', 'yahtzee'];

export default class DisplayScores {
  static getDOMstrings() {
    return DOMstrings;
  }
  static updateScoreboard(gameStatus, totals) {
    DOMstrings.forEach((key) => {
      const DOMselector = document.querySelector(`.${key}`);
      if (gameStatus === 'new') {
        DOMselector.classList.remove('scored');
      }
      if (!DOMselector.classList.contains('scored')) {
        DOMselector.textContent = '';
      }
    });
    this.updateTotals(totals);
  }
  static calc(scores) {
    scores.forEach((key) => {
      const { category, value } = key;
      const DOMselector = document.querySelector(`.${category}`);
      if (DOMselector.classList[1] !== 'scored') {
        DOMselector.textContent = value;
      }
    });
  }
  static addScore(input, totals) {
    const { category, value } = input;
    const DOMselector = document.querySelector(`.${category}`);
    DOMselector.classList.add('scored');
    DOMselector.textContent = value;
    this.updateScoreboard('active', totals);
  }
  static updateTotals(totals) {
    Object.entries(totals).forEach((score) => {
      const category = score[0];
      const value = score[1];
      document.querySelector(`.${category}`).textContent = value;
    });
  }
}
