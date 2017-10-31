export default class Score {
  constructor(type, category, dice) {
    this.type = type;
    this.category = category;
    this.value = this.calculate(dice);
  }
  calculate(dice) {
    let score;
    const count = (arr, num) => {
      let total = 0;
      for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === num) {
          total += num;
        }
      }
      return total;
    };
    switch (this.category) {
      case 'one':
        return count(dice, 1);
      case 'two':
        return count(dice, 2);
      case 'three':
        return count(dice, 3);
      case 'four':
        return count(dice, 4);
      case 'five':
        return count(dice, 5);
      case 'six':
        return count(dice, 6);
      default:
        console.log('else');
        return score;
    }
  }
}
