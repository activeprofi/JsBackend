function Node(name, attributes = {}) {
  this.name = name;
  this.attributes = attributes;
}

Node.prototype.getName = function getName() {
  return this.name;
};

Node.prototype.buildAttributes = function buildAttributes() {
  return Object
    .keys(this.attributes)
    .reduce((acc, key) => `${acc} ${key}="${this.attributes[key]}"`, '');
};

export default Node;
