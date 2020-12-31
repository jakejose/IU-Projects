'use strict';
console.log('working');

//create a color picker function

//randomly generate hex color codes
//6 characters plus hashmark
//abcdef and 1-9

// have an array of all possible characters

//grab header, background, and body
//change these elements upon button click

function colorPicker() {
    //hash to start hex colr
    let colors = "#"
    //array with all possible chars for a hex color
    const chars = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9','0']
    //always has 7 chars
    while (colors.length < 7){
        //producing random color and adding it ot color string
        let newColor = chars[Math.floor(Math.random()*chars.length)]
        colors += newColor
    }
    //changing background based upon color produced by loop
    document.body.style.background = colors
    //document.getElementById('button').style.background = colors
    document.getElementById('code').innerText = colors
    document.getElementById('header').innerText = 'Hex Color Code:'
    //innerText to change the text for correct Hex color scheme
}


//using event listener to run JS upon button click
document.getElementById('buttonb').addEventListener('click',colorPicker)