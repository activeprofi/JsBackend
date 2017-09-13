export default class SimpleCard {
  constructor(name, percent) {
    this.name = name;
    this.percent = percent;
  }

  name() {
    return this.name;
  }

  damage(health) {
    return Math.round(health * (this.percent / 100));
  }
}
