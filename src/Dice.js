export default class Dice {
  static display(diceArr, display) {
    diceArr.forEach((dice, idx) => {
      const diceNum = idx + 1;
      const DOMselector = document.getElementById(`dice${diceNum}`);
      if (display === 'show') {
        DOMselector.style.display = 'block';
      } else {
        DOMselector.style.display = 'none';
      }
    });
  }
}
