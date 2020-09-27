'use strict'; 

console.log("hello")
//1,... 45-no dupes
//5 out of 5 Jackpot
//5 out of 5 $200
//3 out of 5 $15
//2 out of 5 Free Cash 5 Ticket

//User picks 5 numbers
function userNums(){
    let userNumsArray = [];
    for (let counter = 0; counter<5; counter++){
        let guess = prompt("Guess a number 1-45");
        if (isNaN(guess))
        guess = parseInt(guess);
        if (guess<=45 && guess>=1){
            nums.push(guess);
        }else{
            counter--;
            console.log('Not betwen 1 and 45')
        }
        if (nums.includes(guess)==False){
            nums.push(guess);
        }else{
            counter--;
            console.log('That number was already guessed!');

        }
    }
    return userNumsArray;
}
//Generates 5 numbers (Winning numbers)
    //function - input = range of nums - output = array

function generateNumbers(){
    let nums = [];
    for (let counter = 0; counter<5; counter++){
        nums.push(Math.ceil(Math.random()*(45)));
    }
    return nums;
}
//Compare the two arrays
//Look for numbers that are the same in each array
function compareNums(userList,lottoList){
    let match = 0;
    for (let item of userList){
        for (let num of lottoList){
            if (item===num){
                match++;
            }
        }
    }
    return match;
}
//Check numbers and Award prizes
    //Deceide on prize
    //Print results
function lottery(){
    let lotteryNumbers = generateNumbers();
    let guessedNumbers = userNumbers();

    //let matches = compareNums(guessedNumbers,lotteryNumbers);
    if (matches===5){
        console.log("Jackpot");
    }else if (matches===4){
        console.log("$200")
    }else if (matches===3){
        console.log("$15")
    }else if (matches===2){
        console.log("Free Cash 5 Ticket")
    }
}
//tests
//console.log(generateNumbers())
//console.log(userNumbers())
//console.log(compareNums(generateNumbers(),generateNumbers()))
lottery()


/*-cross check to see if the the user entered numbers match any of the winners

-If any of the numbers match one of the winners record that in an array

-add up the total winnings

-display the different numbers they won on the interface

-includes monetary prize (ex '$100','$1000',etc) and name ex ('Jackpot','Free TICKET')

-Display total winnings and winning numbers*/


