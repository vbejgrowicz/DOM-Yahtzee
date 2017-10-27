export default class DisplayScores {
  static all(scorecard) {
    Object.entries(scorecard).forEach((key) => {
      const category = key[0];
      const value = key[1];
      const DOMselector = document.getElementById(`score-${category}`);
      if (!DOMselector.classList.contains('scored')) {
        if (value !== null) {
          DOMselector.textContent = value;
        } else {
          DOMselector.textContent = '';
        }
      }
    });
  }
  static addScore(category, value) {
    const DOMselector = document.getElementById(`score-${category}`);
    DOMselector.classList.add('scored');
    DOMselector.textContent = value;
  }
}
