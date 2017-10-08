import Stats from './Stats';

class Node {
  constructor(name) {
    this.name = name;
  }

  getStats() {
    return new Stats(this.isFile(), this.isDirectory());
  }
}

export default Node;
