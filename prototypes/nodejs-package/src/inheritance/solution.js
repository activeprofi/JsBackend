import buildNode from './buildNode';

const getArgType = (argument) => {
  const types = {
    children: arg => arg instanceof Array,
    attributes: arg => arg instanceof Object,
    body: arg => typeof arg === 'string',
  };

  return Object
    .keys(types)
    .filter(key => types[key](argument))[0];
};

const parse = (data) => {
  const astTag = {
    name: data[0],
  };

  data.slice(1).forEach((item) => {
    const argType = getArgType(item);

    if (argType === 'children') {
      astTag[argType] = item.map(parse);
    } else {
      astTag[argType] = item;
    }
  });

  const { name, attributes, body, children } = astTag;
  return buildNode(name, attributes, body, children);
};

export default parse;
