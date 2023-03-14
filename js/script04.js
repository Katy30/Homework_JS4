// Task #4
/* Створити функцію яка обробляє массив обєктів і вираховує площу фігури в обєкті */
let figurs = [
    {
        figure: "Squar",
        sizeA: 4,
        sizeB: 4
    },
    {
        figure: "Rectangle",
        sizeA: 4,
        sizeB: 8
    }
]

function area(value) {
    let result = [];
    for (let figurs_obj of value) {
        result.push({figure: figurs_obj.figure, area: figurs_obj.sizeA * figurs_obj.sizeB});
    }
    return result
}

console.log(area(figurs))