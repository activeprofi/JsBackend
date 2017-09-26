import Node from './Node';

function toString() {
  return `<${this.getName()}${this.buildAttributes()}>`;
}

function SingleTag(name, attributes = {}) {
  Node.apply(this, [name, attributes]);
  this.toString = toString;
}

export default SingleTag;
