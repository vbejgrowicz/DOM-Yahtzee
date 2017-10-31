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
      let total = 0;
      for (let i = 0; i < diceArr.length; i += 1) {
        if (diceArr[i] === num) {
          total += num;
        }
      }
      return total;
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
      default:
        console.log('else');
        return score;
    }
  }
}
