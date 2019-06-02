if (num < 49) {
    console.log("Неверно!")
} else if (num > 100) {
    console.log("Много!")
} else {
    console.log("Верно!")
};

(num == 50) ? console.log("Верно!"): console.log("Неверно!");

switch (num) {
    case num < 49:
        console.log("Неверно!");
        break;
    case num > 100:
        console.log("Много!");
        break;
    case num > 80:
        console.log("Все еще много!");
        break;
    case 50:
        console.log("Верно!");
        break;
    default:
        console.log("Что-то пошло не так!");
        break;
}
let num = 50;

//while (num < 55) {
//       console.log(num);
//        num++;
//}
do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue
    }
    console.log(i);
};
console.log(1 && 1 && null && 0 && undefined);
let y = 1;
let x = y = 2;
console.log(x);

console.log(3 || 2 && 1 || 5);

let a = 2,
    b = 2;
console.log(a == b);

console.log(+"infinity");

let a = "ежик",
    b = "aблоко";

console.log(a > b);

console.log(0 && "1" || 2 && undefined && true || false);

console.log(undefined && true || false);

let x = 5;
console.log("1,3"[1]);

let a = [1,2,3];
let b = [1,2,3];
console.log(a==b);

let options = {
    width: 1000,
    height: 1000,
    name: "test"
};
options.color = "black";
options.colors = {
    border: "green",
    bg: "blue"
};
console.log(options); // выводим объект в консоль

for (let key in options) {
    console.log('свойство ' + key + ' имеет значение ' + options[key]);
} // цикл для перебора объектов свойств и значений

console.log(Object.keys(options).length); // вывод длины объекта 

let arr = [1, 2, 3];
// arr.pop(); // убрать последний элемент
// arr.push(1);// добавить последний элемент
// arr.shift();// убрать первый
// arr.unshift("3");// добавить первый

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//  console.log(arr[i]);
// } // перебрать массив

arr.forEach(function(item, i, mass){
    console.log(i[1] + ':' + item + "массив " + mass);
});// перебрать массив по трем ключам, i - порядковый номер элемента, 
//item - сам элемент, mass - название массива которые мы присвоили в самом цикле

let mass = [1, 2, 3, 4];
for (let key in mass) {
    console.log(key);
}
// этот цикл перечислит все номера элементов массива, если заменить in на of, перечислит элементы

let ans = prompt("",""),
    arr = [];

arr = ans.split(',');
console.log(arr);
// мы задаем вопрос и ответы, которые пользователь пишет через запятую, помещаем в массив

let arr = ['awe', 'zzz', 'ppp'],
    i = arr.join(', ');
console.log(i);
// объединяем элеиенты массива в одну строку

let arr = ['awe', 'zzz', 'ppp'],
    i = arr.sort();
console.log(i);
// сортировка по алфавиту

function compareNum(a,b) {
    return a-b;
}


function compareNum(a,b) {
    return a-b;
}
let arr = [1, 3, 15, 23, 4],
    i = arr.sort(compareNum);


console.log(arr);
// сортировка для цифр

let a = 2;

//ЦИКЛЫ
// if (a < 2) {
//     console.log('yep');
// }


// if (a < 2){ 
//     console.log('yep');
// }
// else {
//     console.log('none');
// }


// if (a < 2) {
//     console.log('what');
// }
// else if (a = 2){
//     console.log('yep');
// }
// else {
//     console.log('none');
// }

// let a = 2;
// switch(a) {
// case 1:  
//     console.log('nope');
// break;
// case 2: 
// console.log('yep');
// break;
// default:
// console.log('dont know');
// }


for (i = 0; i < 5; i++) {
    if (i == 3) {
        continue;}
        
console.log(i);
}
// остановить цикл break, пропустить нужный элемент continue









