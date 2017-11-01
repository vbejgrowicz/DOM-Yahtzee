export default class Score {
  constructor(type, category, diceObj) {
    this.type = type;
    this.category = category;
    this.value = this.calculate(diceObj);
  }
  calculate(diceObj) {
    let num;
    let score = 0;
    const diceArr = diceObj.map(die => die.value);

    const count = curNum => diceArr.filter(die => die === curNum);

    const counted = {
      1: count(1).length,
      2: count(2).length,
      3: count(3).length,
      4: count(4).length,
      5: count(5).length,
      6: count(6).length,
    };

    const forCounted = (limit) => {
      Object.entries(counted).forEach((current) => {
        const [n, val] = current;
        if (val >= limit) {
          if (limit !== 5) {
            score = (n * val);
          } else {
            score = 50;
          }
        }
      });
      return score;
    };

    const fullhouseTest = () => {
      Object.entries(counted).forEach((current) => {
        if (current[1] === 3) {
          Object.entries(counted).forEach((cur) => {
            if (cur[1] === 2) {
              score = 25;
            }
          });
        }
      });
      return score;
    };

    switch (this.category) {
      case 'one':
        num = 1;
        return counted[num] * num;
      case 'two':
        num = 2;
        return counted[num] * num;
      case 'three':
        num = 3;
        return counted[num] * num;
      case 'four':
        num = 4;
        return counted[num] * num;
      case 'five':
        num = 5;
        return counted[num] * num;
      case 'six':
        num = 6;
        return counted[num] * num;
      case 'threekind':
        return forCounted(3);
      case 'fourkind':
        return forCounted(4);
      case 'fullhouse':
        return fullhouseTest();
      case 'yahtzee':
        return forCounted(5);
      default:
        return score;
    }
  }
}
