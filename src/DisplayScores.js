const DOMstrings = ['one', 'two', 'three', 'four', 'five', 'six', 'threekind', 'fourkind', 'fullhouse', 'smStraight', 'lgStraight', 'yahtzee'];

export default class DisplayScores {
  static getDOMstrings() {
    return DOMstrings;
  }
  static init() {
    DOMstrings.forEach((key) => {
      const DOMselector = document.querySelector(`.${key}`);
      DOMselector.classList.remove('scored');
      DOMselector.textContent = '';
    });
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
  static addScore(input) {
    const { category, value } = input;
    const DOMselector = document.querySelector(`.${category}`);
    DOMselector.classList.add('scored');
    DOMselector.textContent = value;
  }
  static updateTotals(totals) {
    Object.entries(totals).forEach((score) => {
      const category = score[0];
      const value = score[1];
      const DOMselector = document.querySelector(`.${category}`);
      DOMselector.textContent = value;
    });
  }
}
