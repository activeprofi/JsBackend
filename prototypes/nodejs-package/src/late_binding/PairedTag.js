import Node from './Node';

function toString() {
  return `<${this.getName()}${this.buildAttributes()}>` +
         `${this.body}${this.buildChildren()}` +
         `</${this.getName()}>`;
}

function buildChildren() {
  return this.children.map(tag => tag.toString()).join('');
}

function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;

  this.buildChildren = buildChildren;
  this.toString = toString;
}

export default PairedTag;
