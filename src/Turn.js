import Die from './Die';

const Turn = {
  init() {
    const dice = [];
    const numOfDie = 5;
    for (let i = 1; i <= numOfDie; i += 1) {
      dice.push(new Die());
    }
    const rollCount = 3;
    return {
      dice,
      rollCount,
    };
  },
  rollDice(dice) {
    const nextDice = [];
    dice.forEach((currentDie, idx) => {
      if (!currentDie.hold) {
        nextDice[idx] = new Die();
      } else {
        nextDice[idx] = currentDie;
      }
    });
    return nextDice;
  },
};

export default Turn;
