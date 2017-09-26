function getName() {
  return this.name;
}

function buildAttributes() {
  return Object
    .keys(this.attributes)
    .reduce((acc, key) => `${acc} ${key}="${this.attributes[key]}"`, '');
}

function Node(name, attributes = {}) {
  this.name = name;
  this.attributes = attributes;
  this.getName = getName;
  this.buildAttributes = buildAttributes;
}

export default Node;
