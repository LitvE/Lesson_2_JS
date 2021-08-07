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

// let s1 = "Hello, ";
// let s2 = "Vasya";''

// let res;
// res = s1 + s2;
// console.log(res);

// let x1 = 5, x2 = 10;

// res = x1 + x2;

// console.log(res);
// console.log(`Result is ${res}`);

// let s3 = "Hello JS";
// let n1 = 100;
// let n2 = 5.5;
// let b1 = true;
// const COLOR_OF_THE_CAR = "RED";

// console.log(s3);
// console.log(n1);
// console.log(n2);
// console.log(b1);
// console.log(COLOR_OF_THE_CAR);


// let a, h;
// a = prompt('Введите значение a');
// h = prompt('Введите значение h');
// let s = 1/2 * a * h;
// alert(`Площадь треугольника равна:  ${s}`);

/*let x7=100, x8=200;
let res = x7 + x8;
console.log(res);

let x9 = "hello, ", x10 = "Vasya";
res = x9 + x10;
console.log(res);*/

// Sum of two numbers
// 1 способ: оператор +: let x11 = +prompt('1 number');
// 2 способ: функция Number (); for boolean: Boolean()

/*let x11 = Number(prompt('1 number'));
let x12 = Number(prompt('2 number'));


res = x11 + x12; //res = Number(x11) + Number(x12);

alert(res);
console.log(res);*/

//operators
// % - остаток от деления
// ** - возведение в степень

// let x13 = 10, x14 = 3;
// console.log(`Деления: ${x13/x14}`);
// console.log(`Остаток от деления: ${x13%x14}`);
// console.log(`Возведение в степень: ${x13**x14}`);

//Task 3
// есть трехзначное число, вывести первую цифру
/*
let userValue = Number(prompt('Введите трехзначное число:'));
let firstNumber = (userValue - userValue % 100)/100;
let middleNumber = (userValue % 100 - userValue % 10) /10;
let lastNumber = userValue % 10;

console.log(firstNumber);
console.log(middleNumber);
console.log(lastNumber);*/

//оператор сравнения ==
// сравнение идет по значению

//оператор строго равенства ===
// справнение по значению и типу данных

/*let x16 = 10;
console.log('--------------------------');
console.log(x16 % 2 == 0)*/

//условный оператор if
/*if(условие){
    //дейсствие 1
    //действие 2
}*/


/*let userValue1;
userValue1 = prompt('Enter some value')*/

/*
if(userValue1 == 100){

    console.log('The entered value equils 100');
}

if(userValue1 > 100){
 
    console.log('The entered value > 100');
}

if(userValue1 < 100){

    console.log('The entered value < 100');
}

if(userValue1 != 100){
 
    console.log('The entered value != 100');
}*/

/*if(userValue1 % 2 == 0){
    console.log(`Введенное число ${userValue1} явлыется четным`);
}
else {
    console.log(`Введенное число ${userValue1} явлыется нечетным`);
}*/


//Task 3, 6, 7
/*
let notePrice = 10.25, penPrice = 5.86;
let noteQuantity = prompt('Введити количество тетрадей: ');
let penQuantity = prompt('Введите количество ручек: ');
let sum, sumWithDisc, uah, kop, discount = 0.02;
sum = (noteQuantity*notePrice) + (penQuantity*penPrice);
if(sum >= 500){
    sumWithDisc = sum*(1-discount);
    kop = sumWithDisc%1;
    uah = sumWithDisc - kop;
    kop = (kop.toFixed(2))*100;
    alert(`У Вас скидка 2%, сумма к оплате: ${uah} грн., ${kop} коп.`)
}
else{
    kop = sum%1;
    uah = sum - kop;
    kop = (kop.toFixed(2))*100;
    alert(`Cумма к оплате: ${uah} грн., ${kop} коп.`)
}
*/



//Task 4
/*
let result = prompt("Вычислите сумму 2 + 2");
if(result == 4){
    alert("Вы посчитали правильно! :-)");
}
else {
    alert("Вы посчитали неправильно! :-(");
}
*/

/*
let userRole;
if(userRole = "user"){

}
else if(userRole = "moderator"){

}
else if(userRole = "admin"){

}
else{
    console.log('Не определенная роль. Прав нет')
}*/

//логические операторы для условия
// И &&
// ИЛИ ||

// в какую четверть часа относится внесенное кол-во минут
// 1 - 0-15
// 2 - 15-30
// 3 - 30-45
// 4 - 45-60

let valMinutes = prompt('Enter minutes');
let partHour;
if(valMinutes>=0 && valMinutes<=15){
    partHour = 1;

}
else if(valMinutes>15 && valMinutes<=30){
    partHour = 2;
}
else if(valMinutes>30 && valMinutes<=45){
    partHour = 3;
}
else if(valMinutes>45 && valMinutes<=60){
    partHour = 4;
}

console.log('part of hour: ', partHour);