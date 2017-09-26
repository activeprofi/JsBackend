import Node from './Node';

class SingleTag extends Node {
  constructor(name, attributes = {}) {
    super(name, attributes);
  }

  toString() {
    return `<${this.getName()}${this.buildAttributes()}>`;
  }
}

export default SingleTag;
