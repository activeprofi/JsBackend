import Node from './Node';

function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
}

PairedTag.prototype.toString = function toString() {
  return `<${this.getName()}${this.buildAttributes()}>` +
         `${this.body}${this.buildChildren()}` +
         `</${this.getName()}>`;
};

PairedTag.prototype.buildChildren = function buildChildren() {
  return this.children.map(tag => tag.toString()).join('');
};

export default PairedTag;
