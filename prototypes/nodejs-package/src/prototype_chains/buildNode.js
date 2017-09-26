import SingleTag from './SingleTag';
import PairedTag from './PairedTag';

const singleTagsList = new Set(['br', 'img', 'hr']);

const buildNode = (name, ...args) => {
  if (singleTagsList.has(name)) {
    return new SingleTag(name, ...args);
  }

  return new PairedTag(name, ...args);
};

export default buildNode;
