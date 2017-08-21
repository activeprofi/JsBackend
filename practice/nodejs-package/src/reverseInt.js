const reverseInt = number => {
    const iter = (n, acc) => {
        if (n === 0) return acc;

        return iter(Math.floor(n / 10), (acc * 10) + (n % 10));
    };

    return iter(number, 0);
};

export default reverseInt;