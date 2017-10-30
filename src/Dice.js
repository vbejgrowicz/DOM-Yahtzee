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
  static init() {
    const diceArr = [0, 0, 0, 0, 0];
    const rollCount = 3;
    this.display(diceArr, 'hide');
    this.remaining(rollCount);
    diceArr.forEach((dice, idx) => {
      const diceNum = idx + 1;
      const DOMselector = document.getElementById(`dice${diceNum}`);
      DOMselector.classList.remove('hold');
    });
    return {
      diceArr,
      rollCount,
    };
  }
  static rollDice(diceArr) {
    this.display(diceArr, 'show');
    const newArr = [];
    diceArr.forEach((dice, idx) => {
      const diceNum = idx + 1;
      const DOMselector = document.getElementById(`dice${diceNum}`);
      if (!DOMselector.classList.contains('hold')) {
        const roll = Math.round((Math.random() * 5) + 1);
        DOMselector.src = `dice/dice-${roll}.png`;
        newArr.push(roll);
      } else {
        newArr.push(dice);
      }
    });
    return newArr;
  }
  static remaining(rolls) {
    const DOMselector = document.querySelector('.roll-count');
    DOMselector.textContent = rolls;
  }
}
