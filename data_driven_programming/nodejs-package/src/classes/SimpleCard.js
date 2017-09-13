export default class SimpleCard {
  constructor(name, damagePoints) {
    this.name = name;
    this.damagePoints = damagePoints;
  }

  name() {
    return this.name;
  }

  damage() {
    return this.damagePoints;
  }
}
