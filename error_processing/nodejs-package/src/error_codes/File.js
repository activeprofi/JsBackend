import Node from './Node';

class File extends Node {
  constructor(name, body) {
    super(name);
    this.body = body;
  }

  getName() {
    return this.name;
  }

  getBody() {
    return this.body;
  }

  isFile() {
    return true;
  }

  isDirectory() {
    return false;
  }
}

export default File;
