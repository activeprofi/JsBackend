const sumOfDigits = (num) => {
  const iter = (n, acc) => {
    if (n === 0) return acc;

    return iter(Math.floor(n / 10), acc + (n % 10));
  };

  return iter(num, 0);
};

const isHappyTicket = (t) => {
  const ticketNumber = String(t);
  const sumOfFirstPart = sumOfDigits(Number(ticketNumber.substring(0, 3)));
  const sumOfLastPart = sumOfDigits(Number(ticketNumber.substring(3)));

  return sumOfFirstPart === sumOfLastPart;
};

export default isHappyTicket;
