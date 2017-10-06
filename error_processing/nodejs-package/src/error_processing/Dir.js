import Node from './Node';

class Dir extends Node {
  constructor(name) {
    super(name);
  }

  getName() {
    return this.name;
  }

  isFile() {
    return false;
  }

  isDirectory() {
    return true;
  }
}

export default Dir;
