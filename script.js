//Первая игра
function seasons() {
    let month =Number(prompt(`Введите номер месяца и мы посмотрим к какому сезону года он относится!`));

    if (month == 1 || month == 2 || month == 12){
        alert(`Зимний месяц`);
    } else if (month >= 3 && month <= 5) {
        alert(`Весенний месяц`);
    } else if (month >= 6 && month <= 8) {
        alert(`Летний месяц`);
    } else if (month >= 9 && month <= 11) {
        alert(`Осенний месяц`);
    } else {
        alert(`Такого месяца не существует!`);
    }
}

//#5.1
function min(a5, b5) {
    if (a5 < b5) {
        return a5;
    } else {
        return b5;
    }
}

console.log(min(4,  8));
console.log(min(9,  2));
console.log(min(5,  5));

//#5.2
function checkNumber(a5) {
    if (a5 % 2 === 0) {
        return (`Четное число!`)
    } else if (a5 % 2 === 1) {
        return (`Нечетное число!`)
    } else {
        return (`Нет числового значения!`)
    }
}

 console.log(checkNumber(7294723));
 console.log(checkNumber(`sjviodsj`));
 console.log(checkNumber(83774334));

//#5.3
function doublNumber(a5) {
    return a5 ** 2
}

console.log(doublNumber(11988));
console.log(doublNumber(-13));
console.log(doublNumber(`hello`));

//#5.4
let year = prompt(`Сколько вам лет?`)

function years(year) {
    if (year > 0 && year <= 12) {
        return (`Привет, друг!`)
    } else if (year >= 13) {
        return (`Добро пожаловать!`)
    } else {
        return (`Нет числового значения!`)
    }  
}
alert(years(year));

//#5.5
let numA = Number(prompt(`Введите первое число`));
let numB = Number(prompt(`Введите второе число`));

function mult(numA, numB) {
    if (isNaN(numA) || isNaN(numB)) {
        return (`Одно или оба значения не являются числом`)
    } else {
        let mult = numA * numB;
        return (`Произведение чисел равно ${mult}`) 
    }
}
alert(mult(numA, numB));

//#5.6
let num6 = Number(prompt(`Введите число!`));

function numberCube(num6) {
    if (isNaN(num6)) {
        return (`Переданный параметр не является числом!`)
    } else {
        let mult = num6 ** 3;
        return(`${num6} в кубе равняется ${mult}` )
    }
}
alert(numberCube(num6))

//#5.7
let circle1 = prompt(`Введите радиус первой окружности!`);
let circle2 = prompt(`Введите радиус второй окружности!`);

function radius1(circle1) {
    let getArea = 3.14 * (circle1 ** 2);
    let getPerimeter = 3.14 * 2 * circle1;
    return(`Площадь первого круга равняется ${getArea}, а длинна окружности ${getPerimeter}`)
}
alert(radius1(circle1))

function radius2(circle2) {
    let getAreaTwo = 3.14 * (circle2 ** 2);
    let getPerimeterTwo = 3.14 * 2 * circle2;
    return(`Площадь второго круга равняется ${getAreaTwo}, а длинна окружности ${getPerimeterTwo}`)
}
alert(radius2(circle2))

//------------------------------------------------------
//#4.1
let i1 = 1;
let n1 = 2;
while(i1 <= n1) {
    console.log(`Привет!`)
    i1++;
}

//#4.2
let i2 = 1;
let n2 = 5;
while(i2 <= n2) {
    console.log(`${i2}`);
    i2++;
}

//#4.3
let i3 = 7;
let n3 = 22;
while(i3 <= n3) {
    console.log(`${i3}`);
    i3++;
}

//#4.4
let object = { Коля: 200, Вася: 300, Петя: 400 };
for (let key in object) {
    alert(`${key} - зарплата ${object[key]} долларов`)
}

//#4.5
for (i5 = 1000, num5 = 0; i5 > 50; num5++ ) {
i5 /= 2;
alert(`${i5}`)
}

//#4.6
for (i6 = 1; i6 < 31;i6 +=7 ) { 
    alert(`Сегодня пятница, ${i6} число. Необходимо подготовить отчет!`) 
}

//------------------------------------------------------
//#3.1
let password = 1111;
let unlock = Number(prompt( `Введите пароль` ));

if (unlock === password) {
    alert(`Пароль введен верно`)
}
else {
    alert(`Пароль введен неправильно`)
}

//#3.2
let c = 5;

if (c < 10 && c > 0) {
    console.log(`Верно`)
}
else {
    console.log(`Неверно`)
}

//#3.3
let d = 3;
let e = 10;

if (d > 100 || e > 100) {
    console.log(`Верно`)
}
else {
    console.log(`Неверно`)
}

//#3.4
let a = '2';
let b = '3';
a = Number(a);
b = Number(b);
alert( a + b);

//#3.5
let mothNumber = Number(prompt(`Введите номер месяца`));
switch(mothNumber) {

    case 12:
    case 1:
    case 2:
    console.log(`Зимний месяц`)
    break;

    case 3:
    case 4:
    case 5:
    console.log(`Весенний месяц`)
    break;
    
    case 6:
    case 7:
    case 8:
    console.log(`Летний месяц`)
    break;

    case 9:
    case 10:
    case 11:
    console.log(`Осенний месяц`)
    break;

    default:
    console.log('Такого месяца не существует!');
    break;
}

//#3.6 Создать адаптивную версию сайта
// <script src="script.js"></script> ДОБАВЛЕНИЕ JS

//#3.7
let even = Number(prompt(`Пожалуйста, введите любое число`));
switch(even % 2) {
    case 0:
        alert(`Четное число`)
        break;

    case 1:
        alert(`Нечетное число`)
        break;

    default:
        alert(`Вы не ввели числовое значение!`)
        break;
}

//#3.8

let clientOs =Number(prompt(`Для установки мобильного приложения введите "1" - для Android или "0" - для iOS`));
switch (clientOs) {
    case 1:
        alert(`Установите версию приложения для Android по ссылке`);
        break;
    
    case 0:
        alert(`Установите версию приложения для iOS по ссылке`);
        break;
        
    default:
        alert(`Неправильный ввод!`)
        break;
    }

//#3.9
let client = Number(prompt(`Для установки мобильного приложения введите: "1" - для Android или "0" - для iOS`));
let clientDeviceYear = Number(prompt(`Далее определим год выпуска вашего устройства: "1" - ранее 2015 или "0" - позднее 2015`))

if (client == 1 && clientDeviceYear == 1) {
    alert(`Установите облегченную версию приложения для Android по ссылке`)
}
else if (client == 0 && clientDeviceYear == 1) {
    alert(`Установите облегченную версию приложения для iOS по ссылке`)
}
else if (client == 1 && clientDeviceYear == 0) {
    alert(`Установите версию приложения для Android по ссылке`) 
}
else if (client == 0 && clientDeviceYear == 0) {
    alert(`Установите версию приложения для iOS по ссылке`)
}
else {
    alert(`Неправильный ввод!`)
}

//------------------------------------------------------
//#1
let a1 = 10;
let b1 = 20;
alert(a1)
alert(b1)

//#2
let yearFirstPhone = 'Первый iPhone был представлен в 2007 году';
alert(yearFirstPhone)

//#3
let firstNameJS = 'Создателем языка JavaScript считается Брендан Эйх';
alert(firstNameJS)

//#4
let a4 = 10;
let b4 = 2;
let Sum = a4 + b4;
alert(`10 + 2 = ${Sum}`)
let subtraction = a4 - b4;
alert(`10 - 2 = ${subtraction}`)
let multiply = a4 * b4;
alert(`10 * 2 = ${multiply}`)
let div = a4 / b4;
alert(`10 / 2 = ${div}`)

//#5
let a5 = 2;
let b5 = 5;
let result = a5 ** b5;
alert(`2 ^ 5 = ${result}`)

//#6
let a6 = 9;
let b6 = 2;
let divRem = a6 % b6;
alert(`Остаток от деления 9 на 2 = ${divRem}`)

//#7
let a7 = 1;
a7 += 5;
a7 -= 3;
a7 *= 7;
a7 /= 3;
a7++;
a7--;
alert(a7);

//#8
let yourAge = prompt( 'Сколько вам лет?' )
alert(`Вам ${yourAge} лет`)

//#9.1
let user = { 
    name: 'Валерий', 
    age: 27, 
    isAdmin: true
    };
//#9.1
user['city of residence'] = 'Красноярск'
//#9.2
user.age = user.weight;
user.weight = 80;
//#9.3
delete user['city of residence'];
//#9.4
let info = prompt( 'Какую информацию хотите узнать о пользователе?' )
alert( user[info]);
//#10
let yourName = prompt( 'Как ваше имя?' )
alert(`Привет, ${yourName} !`)
