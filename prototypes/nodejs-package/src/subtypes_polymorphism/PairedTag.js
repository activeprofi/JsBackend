class PairedTag {
  constructor(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
  }

  toString() {
    return `<${this.name}${this.buildAttributes()}>` +
           `${this.body}${this.children.map(tag => tag.toString()).join('')}` +
           `</${this.name}>`;
  }

  buildAttributes() {
    return Object
      .keys(this.attributes)
      .reduce((acc, key) => `${acc} ${key}="${this.attributes[key]}"`, '');
  }
}

export default PairedTag;
