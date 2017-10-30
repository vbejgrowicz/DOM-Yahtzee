export default class Dice {
  static display(diceArr, display) {
    diceArr.forEach((dice, idx) => {
      const diceNum = idx + 1;
      const DOMselector = document.getElementById(`dice${diceNum}`);
      if (display === 'show') {
        DOMselector.style.visibility = 'visible';
      } else {
        DOMselector.style.visibility = 'hidden';
      }
    });
  }
  static rollDice(diceArr) {
    this.display(diceArr, 'show');
    const newArr = [];
    diceArr.forEach((dice, idx) => {
      const roll = Math.round((Math.random() * 5) + 1);
      const diceNum = idx + 1;
      const DOMselector = document.getElementById(`dice${diceNum}`);
      DOMselector.src = `dice/dice-${roll}.png`;
      newArr.push(roll);
    });
    return newArr;
  }
}
