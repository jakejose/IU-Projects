'use strict';
console.log('working');

let d = new Date();

let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
const sames = [1,2,3,4,5,6,7,8,9,10,11]
let hour = 0
let min = 0
let sec = 0
let ampm = ''

let total = ''

//finish for converting the rest of the numbers from
//military time to regular time conversion
function timeConverter() {
if (sames.includes(hours) === true) {
    hour += hours
    min += minutes
    sec += seconds
    ampm += 'am'
}else if (hours === 0){
    hour += 12
    min += minutes
    sec += seconds
    ampm += 'am'
}else if (hours === 12){
    hour += 12
    min += minutes
    sec += seconds
    ampm += 'pm'
}else if (hours === 13){
    hour += 1
    min += minutes
    sec += seconds
    ampm += 'pm'
}else if (hours === 14){
    hour += 2
    min += minutes
    sec += seconds
    ampm += 'pm'
}else if (hours === 15){
    hour += 3
    min += minutes
    sec += seconds
    ampm += 'pm'
}else if (hours === 16){
    hour += 4
    min += minutes
    sec += seconds
    ampm += 'pm'
}else if (hours === 17){
    hour += 5
    min += minutes
    sec += seconds
    ampm += 'pm'
}else if (hours === 18){
    hour += 6
    min += minutes
    sec += seconds
    ampm += 'pm'
}else if (hours === 19){
    hour += 7
    min += minutes
    sec += seconds
    ampm += 'pm'
}else if (hours === 20){
    hour += 8
    min += minutes
    sec += seconds
    ampm += 'pm'
}else if (hours === 21){
    hour += 9
    min += minutes
    sec += seconds
    ampm += 'pm'
}else if (hours === 22){
    hour += 10
    min += minutes
    sec += seconds
    ampm += 'pm'
}else if (hours === 23){
    hour += 11
    min += minutes
    sec += seconds
    ampm += 'pm'
}else if (hours === 24){
    hour += 12
    min += minutes
    sec += seconds
    ampm += 'am'
}
}
timeConverter(); 


function totalCreator() {
if (min < 10){
total += hour.toString()+':0'+min.toString()+':'+sec.toString()+' '+ampm;
}else{
total += hour.toString()+':'+min.toString()+':'+sec.toString()+' '+ampm;
}

console.log(total);


document.getElementById('time').innerHTML= total; 
}

totalCreator();






//the conditionals for statements to appear on screen are
//calculated through military time

//between 6pm and 12 am


//testers
// hour = 5
// min = 45
// sec = 0
// ampm = 'pm'

let evening = false
let afternoon = false
let morning = false

function timeOfDay() {

// Good Evening conditionals
if (hour >= 6 && hour <= 11 && ampm === 'pm'){
    console.log('Good Evening');
    evening = true
}else if (hour === 12 && ampm === 'am'){
    console.log('Good Evening');
    evening = true
}else if (hour < 5 && ampm ==='am'){
    console.log('Good Evening');
    evening = true
}else if (hour == 5 && ampm ==='am'&& min < 45 && sec < 60){
    console.log('Good Evening');
    evening = true
}else{
    console.log('not evening');
}

//Good Afternoon Conditional

if (hour === 12 && ampm === 'pm'){
    console.log('Good Afternoon');
    afternoon = true
}else if (hour < 6 && ampm === 'pm'){
    console.log('Good Afternoon');
    afternoon = true
}else {
    console.log('not afternoon');
}

//Good Morning Conditionals

if (hour == 5 && min >= 45 && ampm === 'am'){
    console.log('Good Morning');
    morning = true
}else if(hour >= 6 && hour < 12 && ampm === 'am'){
    console.log('Good Morning');
    morning = true
}else{
    console.log('not morning');
}
}

timeOfDay();

console.log(evening);
console.log(afternoon);
console.log(morning);

//change text based on the time of day

//change background based upon the time of day

function interfaceChanger() {
    if (evening === true){
        document.body.style.background = 'brown';
        document.getElementById('timeDay').innerHTML = 'Good Evening!'
    }else if (afternoon === true){
        document.body.style.background = 'orange';
        document.getElementById('timeDay').innerHTML = 'Good Afternoon!'
    }else if (morning === true){
        document.body.style.background = 'yellow';
        document.getElementById('timeDay').innerHTML = 'Good Morning!'
    }else{
        console.log('error with interface changer')
    }
}

interfaceChanger();