const isDivider = (num, divider) => num % divider === 0;

const isPerfect = (num) => {
  let sum = 0;

  for (let i = 1; i < num; i += 1) {
    if (isDivider(num, i)) sum += i;
  }

  return num === sum;
  /*
  const iter = (counter, acc) => {
    if (counter === num) return acc === num;
    
    return iter(counter + 1, isDivider(num, counter) ? acc + counter : acc);
  };
  
  return iter(1, 0); */
};

export default isPerfect;
