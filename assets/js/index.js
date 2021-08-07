/*
    Типы простых данных:

    Undefined (Неопределённый тип) 
    Boolean (Булев, Логический тип)
    Number (Число) 
    String (Строка)
    BigInt
    Symbol

    Сложные типы данных:
    Null;
    Oject;
    function;

    typeof() - оператор определения типа данных переменнй;
*/

let s1 = "Hello, ";
let s2 = "Vasya";''

let res;
res = s1 + s2;
console.log(res);

let x1 = 5, x2 = 10;

res = x1 + x2;

console.log(res);
console.log(`Result is ${res}`);

let s3 = "Hello JS";
let n1 = 100;
let n2 = 5.5;

let b1 = true;
const COLOR_OF_THE_CAR = "RED";

console.log(s3);
console.log(n1);
console.log(n2);
console.log(b1);
console.log(COLOR_OF_THE_CAR);


let a;
let h;
a = prompt('Введите значение a');
h = prompt('Введите значение h');
let s = 1/2 * a * h;
alert(`Площадь треугольника равна:  ${s}`);


