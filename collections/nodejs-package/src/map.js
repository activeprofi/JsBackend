/* 
 solution.js
 Реализуйте и экспортируйте функцию wordsCount, которая принимает на вход список слов и возвращает объект типа Map, 
 содержащий в себе частоту переданных слов. То есть, ключами являются сами слова, а значениями число повторений.

 Слова могут быть в разных регистрах, а подсчет должен работать без учета регистра.
 stopWords это список стоп-слов, то есть эти слова не должны попадать в результирующую структуру.
 
 Подсказки
 Воспользуйтесь тройкой map/filter/reduce.

 solution.js
*/

const stopWords = ['and', 'or', 'a', 'the', ''];

const wordsCount = (words) => {
  const filteredWords = words
    .map(item => item.toLowerCase())
    .filter(item => !stopWords.includes(item));

  const mapResult = filteredWords.reduce((acc, word) => {
    const wordFrequency = filteredWords.filter(elem => elem === word);
    acc.set(word, wordFrequency.length);

    return acc;

    // if (!acc.has(word)) {
    //   return acc.set(word, 1);
    // }

    // return acc.set(word, acc.get(word) + 1);
  }, new Map());

  return mapResult;
};

export { wordsCount };
