export default class DisplayTurn {
  static getDiceElement(diceNum) {
    return document.getElementById(`dice${diceNum}`);
  }
  static visibility(diceArr, display) {
    diceArr.forEach((dice, idx) => {
      if (display === 'show') {
        this.getDiceElement(idx + 1).style.visibility = 'visible';
      } else {
        this.getDiceElement(idx + 1).style.visibility = 'hidden';
      }
    });
  }
  static init(rollData) {
    this.visibility(rollData.dice, 'hide');
    this.remaining(rollData.rollCount);
    rollData.dice.forEach((dice, idx) => {
      this.getDiceElement(idx + 1).classList.remove('hold');
    });
  }
  static turnInfo(rollData) {
    this.visibility(rollData.dice, 'show');
    this.currentDice(rollData.dice);
    this.remaining(rollData.rollCount);
  }
  static currentDice(diceArr) {
    diceArr.forEach((dice, idx) => {
      const diceElement = this.getDiceElement(idx + 1);
      diceElement.src = `dice/dice-${dice.value}.png`;
    });
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
