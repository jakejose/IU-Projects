'use strict';
console.log('working');

//create a color picker function
//make a string that the color can be added to

//have a variable for the hue and 2 percentages

//Hue 0-360
//percentages 0-100%
//grab p body and button
//change the apects of the HTML
//change text color based on dark vs light tones

//if second percentage is greater than 50 than the text needs to be black
//if less than 50 text should be white 


function colorPicker() {
    //producing random numbers for hue and 2 percentages with floor and random
    let hue = Math.floor(Math.random()*360)
    let per1= Math.floor(Math.random()*100)
    let per2= Math.floor(Math.random()*100)
    //string that will be built with random variables 
    let color = 'hsl('+ hue +','+per1+'%,'+per2+'%)'

    //changing HTML elements based on the number that is produced
    document.body.style.background = color
    //document.getElementById('button').style.background = color
    document.getElementById('code').innerText = color
    document.getElementById('header').innerText = 'HSL Color Code:'

    //conditional statement that changes text color based on if the luminoscity is 
    //light vs dark
    if (per2 > 50){
        //light
        document.body.style.color= 'black'
        document.getElementById('button').style.color = 'black'

    } else {
        //dark
        document.body.style.color= 'white'
        document.getElementById('button').style.color = 'white'
    }



    //console.log(color)

}

//using event listener to have button click run JS code
document.getElementById('buttonc').addEventListener('click',colorPicker)