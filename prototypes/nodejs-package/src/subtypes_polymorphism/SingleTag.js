class SingleTag {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  toString() {
    return `<${this.name}${this.buildAttributes()}>`;
  }

  buildAttributes() {
    return Object
      .keys(this.attributes)
      .reduce((acc, key) => `${acc} ${key}="${this.attributes[key]}"`, '');
  }
}

export default SingleTag;
