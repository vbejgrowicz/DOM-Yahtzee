export default class Score {
  constructor(type, category, diceObj) {
    this.type = type;
    this.category = category;
    this.value = this.calculate(diceObj);
  }
  calculate(diceObj) {
    const diceArr = diceObj.map(die => die.value);
    let score;
    const count = (num) => {
      score = 0;
      for (let i = 0; i < diceArr.length; i += 1) {
        if (diceArr[i] === num) {
          score += num;
        }
      }
      return score;
    };
    const countInstance = () => {
      const result = diceArr.reduce((acc, val) => acc.set(val, 1 + (acc.get(val) || 0)), new Map());
      return result;
    };
    const checkInstances = (limit, scoring) => {
      score = 0;
      countInstance().forEach((value, key) => {
        if (value >= limit) {
          score = scoring || (key * value);
        }
      });
      return score;
    };
    switch (this.category) {
      case 'one':
        return count(1);
      case 'two':
        return count(2);
      case 'three':
        return count(3);
      case 'four':
        return count(4);
      case 'five':
        return count(5);
      case 'six':
        return count(6);
      case 'threekind':
        return checkInstances(3);
      case 'fourkind':
        return checkInstances(4);
      case 'yahtzee':
        return checkInstances(5, 50);
      default:
        console.log('else');
        return score;
    }
  }
}
