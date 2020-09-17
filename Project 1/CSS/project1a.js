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
    let colors = ['pink', 'yellow','orange','blue','red','green','grey','chocolate','crimson','coral'];

    let newColor = colors[Math.floor(Math.random()*colors.length)];

    console.log(newColor)

    document.body.style.background = newColor
    //document.getElementById('button').style.background = newColor
    document.getElementById('code').innerText = newColor
    document.getElementById('header').innerText = 'HTML Color Code:'

}


document.getElementById('button').addEventListener('click',colorSelector)