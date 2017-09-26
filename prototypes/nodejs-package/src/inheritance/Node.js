/*
 Node.js
 Реализуйте базовый класс Node таким чтобы он содержал в себе общую логику

 PairedTag.js, SingleTag.js
 Реализуйте типы тегов как подтипы типа Node.
*/

class Node {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  getName() {
    return this.name;
  }

  buildAttributes() {
    return Object
      .keys(this.attributes)
      .reduce((acc, key) => `${acc} ${key}="${this.attributes[key]}"`, '');
  }
}

export default Node;
