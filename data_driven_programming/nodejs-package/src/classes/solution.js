/* 
 SimpleCard.js
 Реализуйте класс SimpleCard по аналогии с PercentCard.

 solution.js
 Допишите функцию run с учетом того что карта это объект.


 simpleCard.js
*/

import { cons as consList, l, random, head, reverse } from 'hexlet-pairs-data';

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
      const prevLog = head(log);
      const newLogEntry = {
        health1: prevLog.health1,
        health2: prevLog.health2,
        message: `${name1} был убит`,
      };

      return consList(newLogEntry, log);
    }

    const card = customRandom(cards);
    const cardName = card.name;
    const cardDamage = card.damage(health2);

    const newHealth = health2 - cardDamage;
    const message = `Игрок '${name1}' применил '${cardName}' \ 
      против '${name2}' и нанес урон '${cardDamage}'`;

    const stats = { message };
    if (order === 1) {
      stats.health1 = health1;
      stats.health2 = newHealth;
    } else if (order === 2) {
      stats.health1 = newHealth;
      stats.health2 = health1;
    }

    const newLog = consList(stats, log);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
  };

  const startHealth = 10;
  const logItem = {
    health1: startHealth,
    health2: startHealth,
    message: 'Начинаем бой!' };
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, customRandom = random) =>
  (name1, name2) =>
    run(name1, name2, cards, customRandom);
