'use strict';
/* 
setTimeout(function() {
    console.log('hello');
}, 2000) //2 seconds

setInterval(function(){
    console.log('hell0');
}, 3000) //3 seconds */



/* function alarm(){
    console.log('Wake up!!');
}

function setIntervalNow(funcToRun, ms){
    funcToRun();
    return setInterval(funcToRun,ms);
}

setIntervalNow(alarm, 2000); */

let time =0;

function count(){
    time++;
    console.log(time);
}

const countTimer = setInterval(count,1000);
console.log(countTimer);

window.addEventListener('click',function(){
    console.log('stopped',time);
    clearTimeout(countTimer);
})