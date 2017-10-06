/*
 mkdirpSync(path)
 Создает директории рекурсивно (в отличие от mkdir).

 Если в пути встречается файл, то возвращает false, т.к. нельзя создать директорию внутри файла
 -----------------------------------------------------------------------------------------------
 touchSync(path)
 Создает файл по указанному пути.

 Если в пути встречается файл, то возвращает false, т.к. нельзя создать файл внутри файла
 -----------------------------------------------------------------------------------------------
 readdirSync(path)
 Возвращает список файлов (и папок) указанной директории.

 Если директории не существует, то возвращает false
 Если передан файл, то возвращает false
 -----------------------------------------------------------------------------------------------
 rmdirSync(path)
 Удаляет директорию.

 Если передан файл, то возвращает false и ничего не удаляет
 Если директории не существует, то возвращает false
 Если директория непустая, то возвращает false
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
      return false;
    }

    return node.getChildren().map(item => item.getKey());
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

    subtree && subtree.addChild(name, new File(name));
  }

  statSync(filePath) {
    const node = this.findNodes(filePath);

    return node && node.getMeta().getStats();
  }
}

export default HexletFs;
