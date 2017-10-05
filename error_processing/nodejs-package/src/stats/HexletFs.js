/* 
 Задание
 Задача состоит в том, чтобы реализовать тип Stats и его формирование посредством динамической диспетчеризации благодаря подтипам Node.
-------------------------------------------------------------
 Stats.js
 Реализуйте тип Stats со следующим интерфейсом:

 constructor
 isFile()
 isDirectory()
 -------------------------------------------------------------
 Node.js
 Реализуйте надтип Node, интерфейсом которого являются функции:

 getStats()
-------------------------------------------------------------
 Dir.js, File.js
 Реализуйте подтипы Dir и File (надтип Node). 
 Варианты использования этих типов можно увидеть в файле HexletFs.js.
*/

import path from 'path';
import Tree from './Tree';
import File from './File';
import Dir from './Dir';

const getPathParts = filePath =>
  path.normalize(filePath)
    .split(path.sep)
    .filter(item => item);

class HexletFs {
  constructor() {
    const root = '/';
    this.tree = new Tree(root, new Dir(root));
  }

  findNodes(filePath) {
    const parts = getPathParts(filePath);

    return parts.length === 0
      ? this.tree
      : this.tree.getDeepChild(parts);
  }

  isDirectory(filePath) {
    const node = this.findNodes(filePath);

    return node && node.getMeta().getStats().isDirectory();
  }

  isFile(filePath) {
    const node = this.findNodes(filePath);

    return node && node.getMeta().getStats().isFile();
  }

  mkdirSync(filePath) {
    const parts = getPathParts(filePath);
    const lastPart = parts[parts.length - 1];
    const subtree = this.tree.getDeepChild(parts.slice(0, parts.length - 1));

    subtree && subtree.addChild(lastPart, new Dir(lastPart));
  }

  touchSync(filePath) {
    const parts = getPathParts(filePath);
    const lastPart = parts[parts.length - 1];
    const subtree = this.tree.getDeepChild(parts.slice(0, parts.length - 1));

    subtree && subtree.addChild(lastPart, new File(lastPart));
  }

  statSync(filePath) {
    const node = this.findNodes(filePath);

    return node && node.getMeta().getStats();
  }
}

export default HexletFs;
