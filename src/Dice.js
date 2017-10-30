export default class Dice {
  static getDiceElement(diceNum) {
    return document.getElementById(`dice${diceNum}`);
  }
  static display(diceArr, display) {
    diceArr.forEach((dice, idx) => {
      if (display === 'show') {
        this.getDiceElement(idx + 1).style.visibility = 'visible';
      } else {
        this.getDiceElement(idx + 1).style.visibility = 'hidden';
      }
    });
  }
  static init() {
    const diceArr = [0, 0, 0, 0, 0];
    const rollCount = 3;
    this.display(diceArr, 'hide');
    this.remaining(rollCount);
    diceArr.forEach((dice, idx) => {
      this.getDiceElement(idx + 1).classList.remove('hold');
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
      const diceElement = this.getDiceElement(idx + 1);
      if (!diceElement.classList.contains('hold')) {
        const roll = Math.round((Math.random() * 5) + 1);
        diceElement.src = `dice/dice-${roll}.png`;
        newArr.push(roll);
      } else {
        newArr.push(dice);
      }
    });
    return newArr;
  }
  static remaining(rolls) {
    document.querySelector('.roll-count').textContent = rolls;
    if (rolls === 0) {
      document.querySelector('.roll-btn').classList.add('noRolls');
    } else {
      document.querySelector('.roll-btn').classList.remove('noRolls');
    }
  }
}
