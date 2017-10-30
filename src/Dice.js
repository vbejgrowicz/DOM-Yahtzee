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
