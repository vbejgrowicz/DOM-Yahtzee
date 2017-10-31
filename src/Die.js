export default class Dice {
  constructor() {
    this.sides = 6;
    this.value = this.randomValue();
    this.hold = false;
  }
  randomValue() {
    return (Math.floor((Math.random() * this.sides) + 1));
  }
}
