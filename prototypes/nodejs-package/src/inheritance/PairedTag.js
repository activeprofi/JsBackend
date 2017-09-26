import Node from './Node';

class PairedTag extends Node {
  constructor(name, attributes = {}, body = '', children = []) {
    super(name, attributes);
    this.body = body;
    this.children = children;
  }

  buildChildren() {
    return this.children.map(tag => tag.toString()).join('');
  }

  toString() {
    return `<${this.getName()}${this.buildAttributes()}>` +
           `${this.body}${this.buildChildren()}` +
           `</${this.getName()}>`;
  }
}

export default PairedTag;
