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

console.log(null || 2 && 1 || 5);

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