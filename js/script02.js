// Task #2

/*Створити функцію move яка повертає текст  на скільки кроків і куди (отримане значення) змістився користувач.
Створити функцію moveUser яка отримує напрямок переміщення, кількість кроків і функцію move як колбек.
moveUser ('north', move, 10) повина повернути (Юзер перемістився на північ на 10 кроків) */

function move(direction, steps){
    return `Юзер змістився на ${steps} кроків на ${direction}`;
}
 function moveUser(direction, move, steps){
    const result=move(direction,steps);
     return `${result}`;
 }
const result = moveUser('північ', move, 10);
console.log(result);