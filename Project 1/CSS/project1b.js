'use strict';
console.log('working');

//create a color picker function

//randomly generate hex color codes
//6 character that can be a letter of the alphabet or a number

//grab header, background, and body
//change these elements upon buton click

function colorPicker() {
    let colors = "#"
    const chars = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9','0']
    while (colors.length < 7){
        let newColor = chars[Math.floor(Math.random()*chars.length)]
        colors += newColor
    }
    document.body.style.background = colors
    //document.getElementById('button').style.background = newColor
    document.getElementById('code').innerText = colors
    document.getElementById('header').innerText = 'Hex Color Code:'

}








document.getElementById('button').addEventListener('click',colorPicker)