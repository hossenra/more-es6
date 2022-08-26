const numbers = [12, 5, 23, 45, 65, 87, 96, 8, 61, 1];
const bigNums = numbers.filter(number => number > 20);
const smallNums = numbers.filter(n => n < 10);
const even = numbers.filter(num => num % 2 === 0);
// console.log(bigNums);
// console.log(smallNums);
// console.log(even);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'watch', price: 35000},
    {id: 4, name: 'tablet', price: 23000}

];

// const expensive = products.filter(product => product.price > 100000);
// const expensive = products.filter(product => product.price > 10000);
const expensive = products.filter(product => product.price < 100);
console.log(expensive);