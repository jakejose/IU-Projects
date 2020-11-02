// 'use strict';
// let dividend = 18;
// let numbers = [2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers.length; i++) {
//  let factor;
//  let divisor = numbers[i];

// if (dividend % divisor === 0) {
//  factor = true;
//  }

//  if (factor) {
//  console.log(divisor + ' is a factor of ' + dividend + '!');
//  }
// }

//code does not have an error checker for this program
//I have added a try and catch in order to provide errors if there is 
//something wrong with the code
//strict helps with checking for errors
'use strict';
let numbers = [2, 3, 4, 5, 6, 7, 8, 9];
//putting program in a function which helps with pinpointing probelms
//in code
function findDiv(numbers){
    //defining dividend in function so
    let dividend = 18;
    //if data in inputted array is valid try 
    try{
        //shortened for loop (smaller code=less errors)
    for (let num of numbers){
        if(dividend%num===0){
            console.log(num + ' is a factor of ' + dividend + '!');
        }//else provides context if number enterd is not a factor
        else{
            console.log(num +' is not a factor of '+dividend);
        }
    }}
    //catch that provides error is element in array is invalid
    catch(error){
        console.log('Error:'+error);
    }
}
//calling function in main
findDiv(numbers);
