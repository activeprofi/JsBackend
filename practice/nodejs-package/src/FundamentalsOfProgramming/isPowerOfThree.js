const isPowerOfThree = (num) => {
  if (num === 1) return true;

  if (num % 3 === 0) {
    return isPowerOfThree(num / 3);
  }

  return false;
};

export default isPowerOfThree;
