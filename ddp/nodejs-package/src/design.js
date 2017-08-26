/* 
 Допишите логику функции run, которая содержит ядро игрового движка.

 Алгоритм
 Если здоровье игрока (которого атаковали на предыдущем шаге) меньше или равно 0, то обновляем лог и возвращаем наружу. Игра закончена.

 В ином случае, берем рандомную карту, вычисляем урон, записываем новое здоровье, а так же добавляем строчку в лог используя формат.

 const message = `Игрок '${name1}' применил '${cardName}'
 против '${name2}' и нанес урон '${damage}'`;
 
 Повторяем

 Подсказки

 Параметр order в функции iter нужен для определения того, какой игрок сейчас атакует.
 Формат лога cons(cons(health1, health2), message).
 Используйте функцию random для выбора карты из колоды.
*/

import { cons, car, cdr, toString } from 'hexlet-pairs';
import { l, random, append } from 'hexlet-pairs-data';

const getCardName = card => car(card);
const damage = card => cdr(card)();

const run = (player1, player2, cards) => {

    const iter = (health1, name1, health2, name2, order, log) => {
        // console.log(`order = ${order}`);
        // console.log(`health1 = ${health1}`);
        // console.log(`health2 = ${health2}`);

        if (health1 <= 0) {
            //return cons(cons(cons(health1, health2), `${player1} был убит`), log);
            return cons(`${player1} был убит`, log);
        }

        if (health2 <= 0) {
            //return cons(cons(cons(health1, health2), `${player2} был убит`), log);
            return cons(`${player2} был убит`, log);
        }

        const card = random(cards);
        const d = damage(card);

        // console.log(`card = ${getName(card)}`);
        // console.log(`damage = ${damage(card)}`);
        // console.log(`----------------------------`);
        if (order === 1) {
            const message = `Игрок '${name1}' применил '${getCardName(card)}' против '${name2}' и нанес урон '${d}'`;
            const newLogEntry = cons(cons(health1, health2), message);
            const newLog = cons(newLogEntry, log);

            //console.log(`newLogEntry = ${toString(newLogEntry)}`);
            console.log(`newLog = ${toString(newLog)}`);

            return iter(health1, name1, health2 - d, name2, 2, newLog);
        }

        if (order === 2) {
            const message = `Игрок '${name2}' применил '${getCardName(card)}' против '${name1}' и нанес урон '${d}'`;
            const newLogEntry = cons(cons(health1, health2), message);
            const newLog = cons(newLogEntry, log);

            //console.log(`newLogEntry = ${toString(newLogEntry)}`);
            console.log(`newLog = ${toString(newLog)}`);

            return iter(health1 - d, name1, health2, name2, 1, newLog);
        }

    };

    return iter(10, player1, 10, player2, 1, cons('\nНачинаем бой!', null));

};

export const make = (cards) =>
    (name1, name2) =>
    run(name1, name2, cards);