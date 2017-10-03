/**
 * solution.js
 
 * Реализуйте недостающие части интерфейса типа Tree.

 * hasChild()
 * getParent()
 * removeChild(key)
 * hasChildren()
 * getDeepChild(keys)
 * getChildren()
 * tree = new Tree('/');
 * tree.addChild('var')
 * .addChild('lib')
 * .addChild('run');
 * tree.addChild('etc');
 * tree.addChild('home');

 * example: getDeepChild
 * const subtree = tree.getDeepChild(['var', 'lib']);
 * subtree.getkey(); // lib

 * const parent = subtree.getParent();
 * parent.getkey(); // var
 */

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
