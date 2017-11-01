const DOMstrings = ['one', 'two', 'three', 'four', 'five', 'six', 'threekind', 'fourkind', 'fullhouse', 'smStraight', 'lgStraight', 'yahtzee'];

const DisplayScores = {
  getDOMstrings() {
    return DOMstrings;
  },
  updateScoreboard(gameStatus, totals) {
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
  },
  showCalc(scores) {
    scores.forEach((key) => {
      const { category, value } = key;
      const DOMselector = document.querySelector(`.${category}`);
      if (!DOMselector.classList.contains('scored')) {
        DOMselector.textContent = value;
      }
    });
  },
  addScore(input, totals) {
    const { category, value } = input;
    const DOMselector = document.querySelector(`.${category}`);
    DOMselector.classList.add('scored');
    DOMselector.textContent = value;
    this.updateScoreboard('active', totals);
  },
  updateTotals(totals) {
    Object.entries(totals).forEach((score) => {
      const [category, value] = score;
      document.querySelector(`.${category}`).textContent = value;
    });
  },
};

export default DisplayScores;
