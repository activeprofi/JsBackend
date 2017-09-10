/* solution.js
Допишите логику функции run, которая содержит ядро игрового движка.

Алгоритм
Если здоровье игрока (которого атаковали на предыдущем шаге) меньше или равно 0, то обновляем лог и возвращаем наружу. Игра закончена.

В ином случае, берем рандомную карту, вычисляем урон, записываем новое здоровье, а также добавляем строчку в лог, используя формат:

const message = `Игрок '${name1}' применил '${cardName}'
  против '${name2}' и нанес урон '${damage}'`;

Повторяем.

Подсказки
Параметр order в функции iter нужен для определения того, какой игрок сейчас атакует.
Формат записи лога cons(cons(health1, health2), message).
Используйте функцию random для выбора карты из колоды.
*/

import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    const randomCard = random(cards);
    const cardName = car(randomCard);
    const damage = cdr(randomCard)();

    if (order === 1) {
      if (health1 <= 0) {
        return consList(cons(cons(health1, health2), `${player1} был убит.`), log);
      }

      const message = `Игрок '${name1}' применил '${cardName}' против '${name2}' и нанес урон '${damage}'`;
      const newLogEntry = cons(cons(health1, health2 - damage), message);

      return iter(health1, name1, health2 - damage, name2, 2, consList(newLogEntry, log));
    }

    if (health2 <= 0) {
      return consList(cons(cons(health1, health2), `${player1} был убит.`), log);
    }

    const message = `Игрок '${name2}' применил '${cardName}' против '${name1}' и нанес урон '${damage}'`;
    const newLogEntry = cons(cons(health1 - damage, health2), message);

    return iter(health1 - damage, name1, health2, name2, 1, consList(newLogEntry, log));
    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default cards =>
  (name1, name2) =>
    run(name1, name2, cards);
