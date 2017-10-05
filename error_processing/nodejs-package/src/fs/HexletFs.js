/*
  Файловая система должна корректно обрабатывать пустые пути, делая внутри нормализацию. 
  То есть, если ей передать путь ///etc/config//my///, то он транслируется в /etc/config/my.

  HexletFs.js
  Реализуйте следующие части интерфейса типа HexletFs.

  isDirectory(path)

  isFile(path)

  mkdirSync(path)

  touchSync(path) - создает пустой файл. На самом деле, в реальной файловой системе, команда touch меняет время последнего обращения к файлу, 
  а побочным эффектом этой команды является создание файла в случае его отсутствия. По этой причине данной командой часто пользуются для создания файлов.

  Пример:

  files.isDirectory('/etc'); // false

  files.mkdirSync('/etc');
  files.isDirectory('/etc'); // true

  files.mkdirSync('/etc/nginx');
  files.isDirectory('/etc/nginx'); // true

  files.isFile('/file.txt'); // false

  files.touchSync('/file.txt');
  files.isFile('/file.txt'); // true

  Подсказки
  Реализуйте функцию getPathParts, которая разбивает путь на массив имен. Без этой функции не будет работать метод findNode, 
  осуществляющий глубокий поиск файла (каталога) внутри текущего каталога.
  Для работы с путями используйте возможности встроенного в Node.js модуля Path.

  import Tree from './Tree';

  class HexletFs {
    constructor() {
      this.tree = new Tree('/');
    }
  }

  export default HexletFs;
*/

import path from 'path';
import Tree from './Tree';

const getPathParts = filePath =>
  path.normalize(filePath)
    .split(path.sep)
    .filter(item => item);

class HexletFs {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }

  findNodes(filePath) {
    const parts = getPathParts(filePath);

    return parts.length === 0
      ? this.tree
      : this.tree.getDeepChild(parts);
  }

  isDirectory(filePath) {
    const node = this.findNodes(filePath);

    return node && node.getMeta().type === 'dir';
  }

  isFile(filePath) {
    const node = this.findNodes(filePath);

    return node && node.getMeta().type === 'file';
  }

  mkdirSync(filePath) {
    const parts = getPathParts(filePath);
    const lastPart = parts[parts.length - 1];
    const subtree = this.tree.getDeepChild(parts.slice(0, parts.length - 1));

    subtree && subtree.addChild(lastPart, { type: 'dir' });
  }

  touchSync(filePath) {
    const parts = getPathParts(filePath);
    const lastPart = parts[parts.length - 1];
    const subtree = this.tree.getDeepChild(parts.slice(0, parts.length - 1));

    subtree && subtree.addChild(lastPart, { type: 'file' });
  }
}

export default HexletFs;
