// -------------FIND METHOD------------------------
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries

// -------------MAP METHOD----------------------------------------
const kvArray = [{ key: 1, value: 10 },
{ key: 2, value: 20 },
{ key: 3, value: 30 }];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
console.log(reformattedArray)

//-------------REDUCER-----------------------------------------
const total = [0, 1, 2, 3].reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
)
console.log(total); //  0 + 1 + 2 + 3 = 0

// -------------CONCAT---------------------------------------
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// -------------SLICE-------------------------------------
let buah = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
let citrus = buah.slice(1, 3)

console.log(buah); // fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
console.log(citrus); // citrus contains ['Orange','Lemon']
