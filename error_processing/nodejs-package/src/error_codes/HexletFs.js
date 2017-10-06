/*
 Ошибок, связанных с файловой системой, очень много, и для их ручной генерации существуют удобные библиотеки. 
 Например, errno. Пример использования:

 import errors from 'errno';
 errors.code.ENOTEMPTY
 → {
 "errno": 53,
 "code": "ENOTEMPTY",
 "description": "directory not empty"
 }
 Список ошибок можно подсмотреть тут: https://github.com/rvagg/node-errno/blob/master/errno.js

 HexletFs.js
 Реализуйте следующие возможности файловой системы HexletFs:

 unlinkSync(path)
 writeFileSync(path, content)
 readFileSync(path)
 */
import errors from 'errno';

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
    const name = parts[parts.length - 1];
    const subtree = this.tree.getDeepChild(parts.slice(0, parts.length - 1));

    subtree && subtree.addChild(name, new Dir(name));
  }

  mkdirpSync(filePath) {
    const parts = getPathParts(filePath);

    return parts.reduce((node, part) => {
      if (!node) return node;

      const child = node.getChild(part);

      if (!child) {
        return node.addChild(part, new Dir(part));
      }

      if (child.getMeta().getStats().isFile()) {
        return false;
      }

      return child;
    }, this.tree);
  }

  readdirSync(filePath) {
    const node = this.findNodes(filePath);

    if (!node || node.getMeta().isFile()) {
      return [null, errors.code.EPERM];
    }

    return [node.getChildren().map(item => item.getKey()), null];
  }

  rmdirSync(filePath) {
    const node = this.findNodes(filePath);

    if (!node
      || node.getMeta().getStats().isFile()
      || node.getChildren().length > 0) {
      return false;
    }

    return node.getParent().removeChild(node.getKey());
  }

  touchSync(filePath) {
    const parts = getPathParts(filePath);
    const name = parts[parts.length - 1];
    const subtree = parts.slice(0, parts.length - 1)
      .reduce((node, part) => {
        const child = node.getChild(part);

        if (!child || child.getMeta().getStats().isFile()) {
          return false;
        }

        return child;
      }, this.tree);

    return subtree && subtree.addChild(name, new File(name));
  }

  readFileSync(filePath) {
    const node = this.findNodes(filePath);

    if (!node) {
      return [null, errors.code.ENOENT];
    }

    if (node.getMeta().getStats().isDirectory()) {
      return [null, errors.code.EISDIR];
    }

    return [node.getMeta().getBody(), null];
  }

  writeFileSync(filePath, content) {
    const node = this.findNodes(filePath) || this.touchSync(filePath);

    if (!node) {
      return [null, errors.code.ENOENT];
    }

    if (node.getMeta().getStats().isDirectory()) {
      return [null, errors.code.EISDIR];
    }

    const fileName = node.getKey();
    node.meta = new File(fileName, content);

    return [node, null];
  }

  unlinkSync(filePath) {
    const node = this.findNodes(filePath);

    if (!node) return [null, null];

    if (node.getMeta().getStats().isDirectory()) {
      return [null, errors.code.EPERM];
    }

    return [node.getParent().removeChild(node.getKey()), null];
  }

  statSync(filePath) {
    const node = this.findNodes(filePath);

    return node && node.getMeta().getStats();
  }
}

export default HexletFs;
