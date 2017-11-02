export default class Score {
  constructor(type, category, diceObj) {
    this.type = type;
    this.category = category;
    this.value = this.calculate(diceObj);
  }
  calculate(diceObj) {
    let score = 0;
    let numOf;
    const values = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
    };
    const diceArr = diceObj.map(die => die.value);
    const sumDice = diceArr.reduce((a, b) => a + b, 0);
    const isUnique = [...new Set(diceArr)];

    const count = curNum => diceArr.filter(die => die === curNum);

    const checkMultiple = (limit) => {
      isUnique.forEach((num) => {
        numOf = count(num).length;
        if (numOf >= limit) {
          score = sumDice;
        }
      });
      return score;
    };

    switch (this.category) {
      case 'threekind':
        if (isUnique.length <= 3) {
          score = checkMultiple(3);
        }
        return score;
      case 'fourkind':
        if (isUnique.length <= 2) {
          score = checkMultiple(4);
        }
        return score;
      case 'fullhouse':
        if (isUnique.length === 2) {
          numOf = count(isUnique[0]).length;
          if (numOf === 2 || numOf === 3) {
            score = 25;
          }
        }
        return score;
      case 'yahtzee':
        if (isUnique.length === 1) {
          score = 50;
        }
        return score;
      case 'chance':
        score = sumDice;
        return score;
      default:
        score = count(values[this.category]).length * values[this.category];
        return score;
    }
  }
}
