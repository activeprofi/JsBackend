const sumSquareOfDigits = (num) => {
  const iter = (n, acc) => {
    if (n === 0) return acc;

    return iter(Math.floor(n / 10), acc + ((n % 10) ** 2));
  };

  return iter(num, 0);
};

const isHappyNumber = (n) => {
  const iter = (counter, sum) => {
    const isHappy = sum === 1;

    if (isHappy) return true;

    if (counter > 10) return isHappy;

    return iter(counter + 1, sumSquareOfDigits(sum));
  };

  return iter(0, n);
};

export default isHappyNumber;

