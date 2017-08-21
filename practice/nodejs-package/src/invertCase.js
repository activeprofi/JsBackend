const invertChar = char => {
    if (char.toUpperCase() === char) {
        return char.toLowerCase();
    } else {
        return char.toUpperCase();
    }
};

const invertCase = str => {    
    const iter = (counter, acc) => {
        const char = str[counter];

        if (counter === str.length) return acc;

        return iter(counter + 1, acc + invertChar(char));
    };

    return iter(0, '');
};

export default invertCase;
