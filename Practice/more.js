'use strict';
console.log('hello');

let nums = [1,2,3,4,5,6,7,8,9];

const sum = nums.reduce((total, number) => {
    return total + number;
}, 0);

console.log(sum);

let words = ['hello','what','up']

const sentence = words.reduce((total, word)=> {
    return total + word + " ";
}, 'SENTENCE: ')

console.log(sentence);

//let sum1 = nums.reduce(sum, 0);
//console.log('Generic Sum function:', sum1);
