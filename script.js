//ПЕРВАЯ ИГРА
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

//ВТОРАЯ ИГРА
function word() {
    let arrGame = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arrGame = arrGame.sort(() => Math.random() - 0.5);
    alert(arrGame)
    arrGame = arrGame.map(e => e.toLowerCase());

    let question1 = prompt(`Чему равнялся первый элемент массива?`)
    question1 = question1.toLowerCase();
        
        if (question1 === arrGame[0]){
            alert(`Угадал`);
        } else {
            alert(`Не угадал`);
        }
    
    let question2 = prompt(`Чему равнялся последний элемент массива?`)
    question2 = question2.toLowerCase();

        if (question2 === arrGame[6]){
            alert(`Угадал`);
        } else {
            alert(`Не угадал`);
        }

    if (question1 === arrGame[0] && question2 === arrGame[6]) {
        alert(`Поздравляем! Вы угадали оба элемента!`);
    } else if (question1 === arrGame[0] || question2 == arrGame[6]) {
        alert(`Вы были близки к победе!`);
    } else {
        alert(`К сожалению, вы ответили неверно!`);
    }
}
//------------------------------------------------------
//#8.1
const people1 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 console.log(people1.sort((a, b) => a.age > b.age ? 1 : -1));

//#8.2 

function isPositive(num) {
    if(num > 0) {
        return num > 0;
    } else {
        return false
    }
}

function isMale(item) {
    
    if (item.gender === 'male') {
        return item.gender === 'male';
    } else {
        return false;
    }
}

function filter(arr, ruleFunction) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) { 
            result.push(arr[i]);}
    }
    return result; 
        
}
 
console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];
    
console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]



//#8.3
let date = new Date();
let timerId = setInterval(() => console.log(`${date}`), 3000);

setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 31000);

//#8.4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
  callback();
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

//#8.5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'))

//------------------------------------------------------
// //#7.1
// console.log('js'.toUpperCase());

// //#7.2
// function searchStart(array, item) {
//     array.forEach((product) => {

//         if (product.toLowerCase().includes(item.toLowerCase())) {
//             console.log(product.split(' '));
//         }
//     })
// }

// searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); 
// searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); 
// searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); 

// //#7.3
// let x3 = 32.58884;
// //До меньшего целого
// console.log(Math.floor(x3));
// //До большего целого
// console.log(Math.ceil(x3));
// //До ближайшего целого
// console.log(Math.round(x3));

// //#7.4
// console.log(Math.max(52, 53, 49, 77, 21, 32));
// console.log(Math.min(52, 53, 49, 77, 21, 32));

// //#7.5
// function getRandomInt(minValue, maxValue) {
//     return Math.round(Math.random() * (maxValue - minValue)) + minValue;;
// }

// console.log(getRandomInt(1, 10));

// //#7.6
// function getRandomArrNumbers(item) {
//     let arr = [];
//     let item2 = item / 2;
//     item2 = Math.floor(item2);
//     console.log(item2);
//         for(let i = 0; i < item2; i++) {
//             let j = Math.random() * item;
//             j = Math.round(j)
//             arr[arr.length] = j;
//         } 
//     return arr;
// }

// console.log(getRandomArrNumbers(7));
// console.log(getRandomArrNumbers(12));

// //#7.7
// function getRandomInt(minValue, maxValue) {
//     return Math.round(Math.random() * (maxValue - minValue)) + minValue;
// }

// console.log(getRandomInt(1, 10));
// console.log(getRandomInt(0, 20));
// console.log(getRandomInt(-100, 0));

// //#7.8
// let currentDate = new Date();
// console.log(currentDate);

// //#7.9
// let newDate = new Date();
// newDate.setDate(newDate.getDate() + 73);
// console.log(newDate);

// //#7.10
// function date(newDate) {
//     const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//     const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
//     let fullDate = "Дата: " + newDate.getDate() + " " + months[newDate.getMonth()] + " " + newDate.getFullYear() + "," + " " + days[newDate.getDay()];
//     console.log(fullDate)
//     let fullHour = "Время: "+ " " + newDate.getHours() + " часов"+ "," + " " + newDate.getMinutes() + " минут"+ "," + " " + newDate.getSeconds() + " секунд";
//     console.log(fullHour)
// }

// date(new Date())



// ------------------------------------------------------
// //#6.1
// const numbers1 = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbers1.length; i++) {
// 	if (numbers1[i] == 10) break;
// 	console.log(numbers1[i]);
// }

// //#6.2
// const numbers2 = [1, 5, 4, 10, 0, 3];
// console.log(numbers2.indexOf(4));

// //#6.3
// let numbers3 = [1, 3, 5, 10, 20];
// numbers3 = numbers3.join(' ');
// console.log(numbers3);

// //#6.4
// let numbers4 = [];
// for (let i = 0; i < 3; i++) {
//     numbers4[i] = [];
//     for (let j = 0; j < 3; j++) {
// 		numbers4[i].push(1);
// 	}
// }
// console.log(numbers4);

// //#6.5
// let numbers5 = [1, 1, 1];
// for (let j = 0; j < 3; j++) {
//     numbers5.push(2);
// }
// console.log(numbers5);

// //#6.6
// let numbers6 = [9, 8, 7, `a`, 6, 5];
// numbers6 = numbers6.sort();
// numbers6.pop();
// console.log(numbers6);

// //#6.7
// let numbers7 = [9, 8, 7, 6, 5];
// const qua = Number(prompt(`Угадай число массива`)); 
// 	if (numbers7.includes(qua)) {
// 	    alert(`Угадал`)
//     } else {
//         alert(`Не угадал`)
//     }

// //#6.8
// let numbers8 = 'abcdef';
// numbers8 = numbers8.split('');
// numbers8 = numbers8.reverse();
// numbers8 = numbers8.join('');
// console.log(numbers8);

// //#6.9
// let numbers9 = [[1, 2, 3], [4, 5, 6]];
// numbers9 = numbers9.flat();
// console.log(numbers9);

// //#6.10 
// const numbers10 = [1, 3, 5, 6, 8, 2];
// let sum = 0;
// for(let i = 0; i < numbers10.length; i++) {
//     sum += numbers10[i]
//     console.log(sum);
// }

// //#6.11
// function mass11(arr11) {
//     return arr11.map(item => item ** 2);
// }
// const numbers11 = [4, 5, 8, 10];
// console.log(mass11(numbers11))

// //#6.12
// function numbers12(arr12) {
//     let result1 = arr12.map((item) => {
//         return item.length;
//       });
//       console.log(result1)
// }
// numbers12([`lost`, `beautiful`, `sun`, `4 jobs`, ``]);

// ...Без функции...
// let numbers12 = [`lost`, `beautiful`, `sun`, `4 jobs`, ``];
// let result = numbers12.map((item) => {
//   return item.length;
// });
// console.log(result)

// //#6.13
// function filterPositive(array) {
//     result12 = array.filter(i => i < 0)
//     console.log(result12)
//   }
  
//   filterPositive([-1, 0, 5, -10, 56]); 
//   filterPositive([-25, 25, 0, -1000, -2]);

// //------------------------------------------------------
// //#5.1
// function min(a5, b5) {
//     if (a5 < b5) {
//         return a5;
//     } else {
//         return b5;
//     }
// }

// console.log(min(4,  8));
// console.log(min(9,  2));
// console.log(min(5,  5));

// //#5.2
// function checkNumber(a5) {
//     if (a5 % 2 === 0) {
//         return (`Четное число!`)
//     } else if (a5 % 2 === 1) {
//         return (`Нечетное число!`)
//     } else {
//         return (`Нет числового значения!`)
//     }
// }

//  console.log(checkNumber(7294723));
//  console.log(checkNumber(`sjviodsj`));
//  console.log(checkNumber(83774334));

// //#5.3
// function doublNumber(a5) {
//     return a5 ** 2
// }

// console.log(doublNumber(11988));
// console.log(doublNumber(-13));
// console.log(doublNumber(`hello`));

// //#5.4
// let year = prompt(`Сколько вам лет?`)

// function years(year) {
//     if (year > 0 && year <= 12) {
//         return (`Привет, друг!`)
//     } else if (year >= 13) {
//         return (`Добро пожаловать!`)
//     } else {
//         return (`Нет числового значения!`)
//     }  
// }
// alert(years(year));

// //#5.5
// let numA = Number(prompt(`Введите первое число`));
// let numB = Number(prompt(`Введите второе число`));

// function mult(numA, numB) {
//     if (isNaN(numA) || isNaN(numB)) {
//         return (`Одно или оба значения не являются числом`)
//     } else {
//         let mult = numA * numB;
//         return (`Произведение чисел равно ${mult}`) 
//     }
// }
// alert(mult(numA, numB));

// //#5.6
// let num6 = Number(prompt(`Введите число!`));

// function numberCube(num6) {
//     if (isNaN(num6)) {
//         return (`Переданный параметр не является числом!`)
//     } else {
//         let mult = num6 ** 3;
//         return(`${num6} в кубе равняется ${mult}` )
//     }
// }
// alert(numberCube(num6))

// //#5.7
// let circle1 = prompt(`Введите радиус первой окружности!`);
// let circle2 = prompt(`Введите радиус второй окружности!`);

// function radius1(circle1) {
//     let getArea = 3.14 * (circle1 ** 2);
//     let getPerimeter = 3.14 * 2 * circle1;
//     return(`Площадь первого круга равняется ${getArea}, а длинна окружности ${getPerimeter}`)
// }
// alert(radius1(circle1))

// function radius2(circle2) {
//     let getAreaTwo = 3.14 * (circle2 ** 2);
//     let getPerimeterTwo = 3.14 * 2 * circle2;
//     return(`Площадь второго круга равняется ${getAreaTwo}, а длинна окружности ${getPerimeterTwo}`)
// }
// alert(radius2(circle2))

// //------------------------------------------------------
// //#4.1
// let i1 = 1;
// let n1 = 2;
// while(i1 <= n1) {
//     console.log(`Привет!`)
//     i1++;
// }

// //#4.2
// let i2 = 1;
// let n2 = 5;
// while(i2 <= n2) {
//     console.log(`${i2}`);
//     i2++;
// }

// //#4.3
// let i3 = 7;
// let n3 = 22;
// while(i3 <= n3) {
//     console.log(`${i3}`);
//     i3++;
// }

// //#4.4
// let object = { Коля: 200, Вася: 300, Петя: 400 };
// for (let key in object) {
//     alert(`${key} - зарплата ${object[key]} долларов`)
// }

// //#4.5
// for (i5 = 1000, num5 = 0; i5 > 50; num5++ ) {
// i5 /= 2;
// alert(`${i5}`)
// }

// //#4.6
// for (i6 = 1; i6 < 31;i6 +=7 ) { 
//     alert(`Сегодня пятница, ${i6} число. Необходимо подготовить отчет!`) 
// }

// //------------------------------------------------------
// //#3.1
// let password = 1111;
// let unlock = Number(prompt( `Введите пароль` ));

// if (unlock === password) {
//     alert(`Пароль введен верно`)
// }
// else {
//     alert(`Пароль введен неправильно`)
// }

// //#3.2
// let c = 5;

// if (c < 10 && c > 0) {
//     console.log(`Верно`)
// }
// else {
//     console.log(`Неверно`)
// }

// //#3.3
// let d = 3;
// let e = 10;

// if (d > 100 || e > 100) {
//     console.log(`Верно`)
// }
// else {
//     console.log(`Неверно`)
// }

// //#3.4
// let a = '2';
// let b = '3';
// a = Number(a);
// b = Number(b);
// alert( a + b);

// //#3.5
// let mothNumber = Number(prompt(`Введите номер месяца`));
// switch(mothNumber) {

//     case 12:
//     case 1:
//     case 2:
//     console.log(`Зимний месяц`)
//     break;

//     case 3:
//     case 4:
//     case 5:
//     console.log(`Весенний месяц`)
//     break;
    
//     case 6:
//     case 7:
//     case 8:
//     console.log(`Летний месяц`)
//     break;

//     case 9:
//     case 10:
//     case 11:
//     console.log(`Осенний месяц`)
//     break;

//     default:
//     console.log('Такого месяца не существует!');
//     break;
// }

// //#3.6 Создать адаптивную версию сайта
// // <script src="script.js"></script> ДОБАВЛЕНИЕ JS

// //#3.7
// let even = Number(prompt(`Пожалуйста, введите любое число`));
// switch(even % 2) {
//     case 0:
//         alert(`Четное число`)
//         break;

//     case 1:
//         alert(`Нечетное число`)
//         break;

//     default:
//         alert(`Вы не ввели числовое значение!`)
//         break;
// }

// //#3.8

// let clientOs =Number(prompt(`Для установки мобильного приложения введите "1" - для Android или "0" - для iOS`));
// switch (clientOs) {
//     case 1:
//         alert(`Установите версию приложения для Android по ссылке`);
//         break;
    
//     case 0:
//         alert(`Установите версию приложения для iOS по ссылке`);
//         break;
        
//     default:
//         alert(`Неправильный ввод!`)
//         break;
//     }

// //#3.9
// let client = Number(prompt(`Для установки мобильного приложения введите: "1" - для Android или "0" - для iOS`));
// let clientDeviceYear = Number(prompt(`Далее определим год выпуска вашего устройства: "1" - ранее 2015 или "0" - позднее 2015`))

// if (client == 1 && clientDeviceYear == 1) {
//     alert(`Установите облегченную версию приложения для Android по ссылке`)
// }
// else if (client == 0 && clientDeviceYear == 1) {
//     alert(`Установите облегченную версию приложения для iOS по ссылке`)
// }
// else if (client == 1 && clientDeviceYear == 0) {
//     alert(`Установите версию приложения для Android по ссылке`) 
// }
// else if (client == 0 && clientDeviceYear == 0) {
//     alert(`Установите версию приложения для iOS по ссылке`)
// }
// else {
//     alert(`Неправильный ввод!`)
// }

// //------------------------------------------------------
// //#1
// let a1 = 10;
// let b1 = 20;
// alert(a1)
// alert(b1)

// //#2
// let yearFirstPhone = 'Первый iPhone был представлен в 2007 году';
// alert(yearFirstPhone)

// //#3
// let firstNameJS = 'Создателем языка JavaScript считается Брендан Эйх';
// alert(firstNameJS)

// //#4
// let a4 = 10;
// let b4 = 2;
// let Sum = a4 + b4;
// alert(`10 + 2 = ${Sum}`)
// let subtraction = a4 - b4;
// alert(`10 - 2 = ${subtraction}`)
// let multiply = a4 * b4;
// alert(`10 * 2 = ${multiply}`)
// let div = a4 / b4;
// alert(`10 / 2 = ${div}`)

// //#5
// let a5 = 2;
// let b5 = 5;
// let result = a5 ** b5;
// alert(`2 ^ 5 = ${result}`)

// //#6
// let a6 = 9;
// let b6 = 2;
// let divRem = a6 % b6;
// alert(`Остаток от деления 9 на 2 = ${divRem}`)

// //#7
// let a7 = 1;
// a7 += 5;
// a7 -= 3;
// a7 *= 7;
// a7 /= 3;
// a7++;
// a7--;
// alert(a7);

// //#8
// let yourAge = prompt( 'Сколько вам лет?' )
// alert(`Вам ${yourAge} лет`)

// //#9.1
// let user = { 
//     name: 'Валерий', 
//     age: 27, 
//     isAdmin: true
//     };
// //#9.1
// user['city of residence'] = 'Красноярск'
// //#9.2
// user.age = user.weight;
// user.weight = 80;
// //#9.3
// delete user['city of residence'];
// //#9.4
// let info = prompt( 'Какую информацию хотите узнать о пользователе?' )
// alert( user[info]);
// //#10
// let yourName = prompt( 'Как ваше имя?' )
// alert(`Привет, ${yourName} !`)
