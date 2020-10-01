// PRACTICE WITH FILTER, MAP and REDUCE
'use strict';
const staples = [
  {
    name: 'flour',
    price: 3
  },
  {
    name: 'rice',
    price: 5
  },
  {
    name: 'milk',
    price: 4.5
  },
  {
    name: 'eggs',
    price: 4
  }, {
    name: 'tp',
    price: 6
  }
];

// PROBLEM #1: 
// Get a list of all the prices
// output: 
// Just the prices please: [ 3, 5, 4.5, 4, 6 ]

const mapPrices = staples.map((item) => {
  return item.price;
});
console.log('Prices: ', mapPrices);




// PROBLEM #2
// Get a list of all items under $5
// output:
// Less than $5: [
//   { name: 'flour', price: 3 },
//   { name: 'milk', price: 4.5 },
//   { name: 'eggs', price: 4 }
// ]
const mapItems = staples.filter((item) => {

  return item.price < 5;
});
console.log('Items less than $5: ', mapItems);


// PROBLEM #3
// If we buy one of each of our staples, how much will that cost?
// output: 
// Total cost: 22.5

const reduceCost = staples.reduce((total, item)=> {

  return total + item.price

}, 0);

console.log('total: ', reduceCost);

// PROBLEM #4
// Double the prices of each staple
// output:
// [
//   { name: 'flour', price: 6 },
//   { name: 'rice', price: 10 },
//   { name: 'milk', price: 9 },
//   { name: 'eggs', price: 8 },
//   { name: 'tp', price: 12 }
// ]


// const mapDouble = staples.map((item) => {
//   //item.price = item.price*2
//   return (item.name, item.price*2);
//   //return item
// });
// console.log('Prices Doubled : ', mapDouble);


const mapDouble = staples.reduce((total, item) => {
    //get the price
    //push entire item to total
    //return total to mapDouble
  item.price = item.price * 2;

  total.push(item);

  return total

  console.log(item.price);
}, []);

console.log('Doubled Staples: ', mapDouble);
