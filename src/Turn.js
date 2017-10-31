import Die from './Die';

export default class Turn {
  static init() {
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
  }
  static rollDice(dice) {
    const nextDice = [];
    dice.forEach((currentDie, idx) => {
      if (!currentDie.hold) {
        nextDice[idx] = new Die();
      } else {
        nextDice[idx] = currentDie;
      }
    });
    return nextDice;
  }
  }
}
