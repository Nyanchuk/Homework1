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
