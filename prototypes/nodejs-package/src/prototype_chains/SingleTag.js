import Node from './Node';

function SingleTag(name, attributes = {}) {
  Node.apply(this, [name, attributes]);
}

SingleTag.prototype = Object.create(Node.prototype);

SingleTag.prototype.toString = function toString() {
  return `<${this.getName()}${this.buildAttributes()}>`;
};

export default SingleTag;
