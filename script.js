// 1. Определения операторов и операндов
// let x = 5 + 10 * 2;                     // 5,10,2 операнды; +, * операторы
// let isValid = (x > 10) && (x < 30);     // x,10,30 операнды; >,&&,< операторы
// x++;                                    // x операнд, ++ оператор
// delete obj.prop;                        // delete оператор, obj.prop операнд

// 2. Арифметические операторы
console.log(3+6);
console.log(3-2);
console.log(5*2);
console.log(10/2);
console.log(55%4);
console.log(5**2);

// 3. Бинарные и унарные операторы
let a = 10; // унарный
let b = -a; // унарный минус, меняет число на противоположное
a++; // постпрефиксный инкремент, увеличивает значение переменной на 1
let c = a + b; // бинарные

// 4. Операторы проверки отношений
let x = 15;
let y = 20;
console.log(x>y);
console.log(x<y);
console.log(x==y);
console.log(x!=y);

// 5.Проверка на равенство и неравенство
5 == '5'; // true, не учитывает типы операндов
5 === '5'; // false, строгое сравнение учитывает типы
null == undefined; // true, оба значения пустые
null === undefined; // false, null имеет невписанное значение, undefined вообще не прописано

// 6.  Оператор in
let user = {
    name: 'John',
    age: 30
    };
    console.log('name' in user); // true, элемент name есть 
    console.log('email' in user); // false, элемента email нет

// 7.  Оператор присваивания и комбинирование с другими операторами
// let a = 10;
// a += 5; 
// a *= 2; 
// a -= 3; 

// 8.  Логические операторы
let isAdmin = true;
let isLoggedIn = false;
let canViewPage = isAdmin && isLoggedIn; // false, не оба операнда истинны
let hasPermission = isAdmin || isLoggedIn; // true
let isGuest = !isLoggedIn; // true

// 9. Тернарный оператор
// let isLoggedIn = true; // Или false, попробуйте оба варианта
// console.log(isLoggedIn ? "Добро пожаловать" : "Вход запрещен");

// 10. Оператор typeof и оператор delete
console.log(typeof 123); // number
console.log(typeof 'Hello'); // string
console.log(typeof undefined); // undefined
let car = {
make: 'Toyota',
model: 'Corolla'
};
delete car.model; // Удалилось
console.log(car); // Проверьте объект

// 11. : Практика с несколькими операторами
let num1 = 10;
let num2 = 20;

let sum = num1 + num2;
let diff = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log(`Сумма: ${sum}, Разность: ${diff}, Произведение: ${product}, Частное: ${quotient}`);

let isEqual = num1 === num2;
console.log(isEqual ? "Числа равны" : "Числа не равны");

let isPositive = (num1 > 0) && (num2 > 0);
console.log(isPositive ? "Оба числа положительные" : "Одно или оба числа не положительные");
