'use strict';
console.log('working');

//Build interface

function addChoices()
{
    const choices = document.querySelectorAll('.choices');
    let html = '';

    for (let i = 1; i < 45; i++){
        html += `   <div>${i}</div> `;
    }
    choices.insertAdjacentHTML('afterbegin',html);
}

addChoices();
//Select the buttons
//connect to event listeners

const allChoices = documnet.querySelectorAll('.choices > div');


allChoices.forEach(element=>{
    element.addEventListener('click', function(){
        console.log(element.textContent);
    };
});


function updateUserNums(){
    for (let i = 0; i < userNumsArray.length; i++){
        if(isNaN(userNumsArray[i])){
            html += `   <div>'-'</div> `;
        }else{
        html += `   <div>${i}</div> `;}
}
user-nums.insertAdjacentHTML('afterbegin',html);

}




