const DOMstrings = ['one', 'two', 'three', 'four', 'five', 'six', 'threekind', 'fourkind', 'fullhouse', 'smStraight', 'lgStraight', 'yahtzee', 'chance'];

const DisplayScores = {
  getDOMstrings() {
    return DOMstrings;
  },
  updateScoreboard(gameStatus, totals) {
    const arrScored = [];
    DOMstrings.forEach((key) => {
      const DOMselector = document.querySelector(`.${key}`);
      if (gameStatus === 'new') {
        DOMselector.classList.remove('scored');
      }
      if (!DOMselector.classList.contains('scored')) {
        DOMselector.textContent = '';
        arrScored.push(false);
      }
    });
    this.updateTotals(totals);
    const status = this.checkWon(arrScored, totals);
    return status;
  },
  checkWon(arrScored, gameTotals) {
    let status = 'active';
    if (!arrScored.includes(false)) {
      status = 'winner';
      this.checkHighScore(gameTotals);
    }
    return status;
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
  addScore(input, totals, status) {
    const { category, value } = input;
    const DOMselector = document.querySelector(`.${category}`);
    DOMselector.classList.add('scored');
    DOMselector.textContent = value;
    return this.updateScoreboard(status, totals);
  },
  updateTotals(totals) {
    Object.entries(totals).forEach((score) => {
      const [category, value] = score;
      document.querySelector(`.${category}`).textContent = value;
    });
  },
  checkHighScore(totals) {
    if (totals.total > totals.highScore) {
      localStorage.setItem('score', totals.total);
    }
  },
};

export default DisplayScores;
