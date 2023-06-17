//#3.1
let password = 'пароль';
let unlock = Number(prompt( `Введите пароль` ));

if (unlock === 1111) {
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

    case(12):
    case(1):
    case(2):
    console.log(`Зимний месяц`)
    break;

    case(3):
    case(4):
    case(5):
    console.log(`Весенний месяц`)
    break;
    
    case(6):
    case(7):
    case(8):
    console.log(`Летний месяц`)
    break;

    case(9):
    case(10):
    case(11):
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
    case(0):
        alert(`Четное число`)
        break;

    case(1):
        alert(`Нечетное число`)
        break;

    default:
        alert(`Вы не ввели числовое значение!`)
        break;
}

//#3.8

let clientOs =Number(prompt(`Для установки мобильного приложения введите "1" - для Android или "0" - для iOS`));
switch (clientOs) {
    case (1):
        alert(`Установите версию приложения для Android по ссылке`);
        break;
    
    case (0):
        alert(`Установите версию приложения для iOS по ссылке`);
        break;
        
    default:
        alert(`Неправильный ввод!`)
        break;
    }

//#3.9
let client = Number(prompt(`Для установки мобильного приложения введите: "1" - для Android или "0" - для iOS`));
let clientDeviceYear = Number(prompt(`Далее определим год выпуска вашего устройства: "1" - ранее 2015 или "0" - позднее 2015`))

switch(client && clientDeviceYear) {
    case ( 1 && 1):
        alert(`Установите облегченную версию приложения для Android по ссылке`)
        break;

    case ( 0 && 1):
        alert(`Установите облегченную версию приложения для iOS по ссылке`)
        break;

    case ( 1 && 0):
        alert(`Установите версию приложения для Android по ссылке`)
        break;

    case ( 0 && 0):
        alert(`Установите версию приложения для iOS по ссылке`)
        break;

    default:
        alert(`Неправильный ввод!`)
        break;
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
