const DisplayTurn = {
  getDiceElement(diceNum) {
    return document.getElementById(`${diceNum}`);
  },
  visibility(diceArr, display) {
    diceArr.forEach((dice, idx) => {
      if (display === 'show') {
        this.getDiceElement(idx).style.visibility = 'visible';
        document.querySelector('.scorecard').classList.add('active');
      } else {
        this.getDiceElement(idx).style.visibility = 'hidden';
        document.querySelector('.scorecard').classList.remove('active');
      }
    });
  },
  holdDice(diceNum) {
    this.getDiceElement(diceNum).classList.toggle('hold');
  },
  init(rollData) {
    this.visibility(rollData.dice, 'hide');
    this.remaining(rollData.rollCount);
    rollData.dice.forEach((dice, idx) => {
      this.getDiceElement(idx).classList.remove('hold');
    });
  },
  turnInfo(rollData) {
    this.visibility(rollData.dice, 'show');
    this.currentDice(rollData.dice);
    this.remaining(rollData.rollCount);
  },
  currentDice(diceArr) {
    diceArr.forEach((dice, idx) => {
      const diceElement = this.getDiceElement(idx);
      diceElement.src = `dice/dice-${dice.value}.png`;
    });
  },
  remaining(rolls) {
    document.querySelector('.roll-count').textContent = rolls;
    if (rolls === 0) {
      document.querySelector('.roll-btn').classList.add('noRolls');
    } else {
      document.querySelector('.roll-btn').classList.remove('noRolls');
    }
  },
  game(status) {
    if (status === 'winner') {
      document.querySelector('.dice-area').style.display = 'none';
      document.querySelector('.game-over').style.display = 'flex';
    } else {
      document.querySelector('.dice-area').style.display = 'flex';
      document.querySelector('.game-over').style.display = 'none';
    }
  },
};

export default DisplayTurn;
