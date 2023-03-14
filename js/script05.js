// Task #5
/* Свторити новий массив який використовує массив [2,3,5,4,8,7,9,10] і перемножує парні значення на 4 */

let array=[2,3,5,4,8,7,9,10];
function fnNewArr (value) {
    let newArray=[];
    for (let el of value) {
        if(el % 2===0){
            el*=4;
        }
        newArray.push(el);
    }
    return newArray;
}

console.log(fnNewArr(array));