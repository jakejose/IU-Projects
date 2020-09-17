'use strict';
console.log('working');

//1 select the HTML Elements
//p, button, body

//2 connect button to function with an event listener


//3 write the function
//4 picks a color (A,B,C)
    //array named colors of colors
//5 update the HTML (textContent (or innerHTML), style)

function colorSelector(){

    //color array
    let colors = ['pink', 'yellow','orange','blue','red','green','grey','chocolate','crimson','coral'];
    //using math floor and random to produce a randome color from the array
    let newColor = colors[Math.floor(Math.random()*colors.length)];

    //test
    console.log(newColor)
    //changing the body, paragraph and header by grabbing
    document.body.style.background = newColor
    //document.getElementById('button').style.background = newColor
    document.getElementById('code').innerText = newColor
    document.getElementById('header').innerText = 'HTML Color Code:'
    //innerText to change the text for correct color scheme
}

//using event listener to run JS upon button click
document.getElementById('buttona').addEventListener('click',colorSelector)