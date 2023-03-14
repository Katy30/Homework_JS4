// Task #3

/*Створіть массив в якому видаляється кожний другий елемент ["Keep", "Remove", "Keep", "Remove", "Keep", ...]
в результаті повинен бути ось такий новий массив ["Keep", "Keep", "Keep", ...],
Врахувати що массив може бути пустий, повернути помилку в разі пустого масиву */

let array =["Keep", "Remove", "Keep", "Remove", "Keep", "..."]
function removeOtherarray(newArr){
    if(newArr.length===0){
        console.log("Помилка, масив порожній");
    }

    return newArr.filter(function(newArr, index) {
        return index % 2 === 0;
    });
}
const newArray = removeOtherarray(array);
console.log(newArray);