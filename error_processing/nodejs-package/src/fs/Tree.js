class Tree {
  constructor(key, meta, parent) {
    this.key = key;
    this.meta = meta;
    this.parent = parent;
    this.children = new Map();
  }

  addChild(key, meta) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);

    return child;
  }

  hasChildren() {
    return this.children.size !== 0;
  }

  hasChild(key) {
    return this.children.has(key);
  }

  getKey() {
    return this.key;
  }

  getMeta() {
    return this.meta;
  }

  getChildren() {
    return [...this.children.values()];
  }

  getParent() {
    return this.parent;
  }

  getChild(key) {
    return this.children.get(key);
  }

  getDeepChild(keys) {
    return keys.reduce((currentNode, key) =>
      currentNode && currentNode.getChild(key), this);
  }

  removeChild(key) {
    return this.children.delete(key);
  }
}

export default Tree;
