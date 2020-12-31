"use strict";
console.log('working');
//loading JSON into JS
function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'project3.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(JSON.parse(xobj.responseText));
        }
    };
    xobj.send(null);
}
//selecting the quiz div and the marker div
let quiz = document.querySelector('.quiz');
let circles = document.querySelector('.marker');
//questions list (empty variables that will be modified)
let questions = [];
let random = [];
let checked= [];
let correct ='';
let numberAnswered = 0;
let numberCorrect = 0;
//push json into a new list 
function pusher(data){
let marker = '';
  data.forEach(item => {
    marker += `<div class ='circle' name = ${item.id}></div>`
    questions.push(item);
  });
  //shuffling 
randomList(questions);
circles.insertAdjacentHTML("afterbegin",marker);
showQuiz(questions);
}
//shuffling the questions array to produce a random question
//source https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php
function randomList(ls){
    let num = ls.length,hold,index;
    while (num>0){
        index = Math.floor(Math.random() * num);
        num--;
        hold = ls[num];
        ls[num]=ls[index];
        ls[index]=hold;
    }
    return ls;}
//current question
let curID=''
//display data
function showQuiz(questions){
    console.log(questions);
    //this will be the current question
    random.push(questions[numberAnswered]);
    console.log(random);
    let q = '<ul>';
    questions.forEach(e =>{
        //checking to make sure item has not been checked
        if (random.includes(e)&&checked.includes(e)===false) {
            q +=
                `<center>
                <h2>${e.question}</h2>
        </center>`;
            for (const x in e.answers) {
                q +=
                    `<center>
                    <li><label for='${x}'><strong>${x}: ${e.answers[x]}</strong></label><br>
            <input class = 'image' type='image' id = '${x}' src = 'images/${e.answers[x]}.png'>
            </li>
            </center>`;
            } 
            //checking item after it has been displayed
            checked.push(e);
            correct += e.correct;
            curID += e.id;
        } 
    });
    //inserting display HTMML
    quiz.insertAdjacentHTML('afterbegin', q + "</ul>");
    //selecting and clicking images
    let images = document.querySelectorAll('.image');
    clicker(images);}
//function for clicked image
function clicker(items){
    items.forEach(e =>{
        e.addEventListener('click', ()=>{
            //updated the number answered and the color of marker
            //based upon if answer is correct
            numberAnswered += 1
            let answer = document.querySelector(`div[name = '${numberAnswered-1}']`);
            if(correct.includes(e.id)){
                answer.style.backgroundColor = "green";
                numberCorrect += 1
            }else{
                answer.style.backgroundColor = "red";
            }
            //activates next function
            next();
        })
    })
}
//next function resets varaibles
function next(){
    quiz.innerHTML='';
    correct = '';
    curID='';
    random = [];
    showQuiz(questions);
    let results = '';
    //displays results if all questions have been asked
    if (numberAnswered===questions.length){
        let percentage = (numberCorrect/numberAnswered)*100;
        results +=
        `
        <h3>Correct: ${numberCorrect}</h3>
        <h3>Total Questions: ${numberAnswered}</h3>

        <h3>Percentage Correct: ${percentage.toFixed(2)}%</h3>
        <h4>Click Adam Sandler's 'Click' to play again!</h4>
        <center><img id = 'reset' src='images/click.png'></center>
        
        `
        //inserting final HTML
        quiz.insertAdjacentHTML("afterbegin",results);
        let reset = document.querySelector('#reset');
        reset.addEventListener('click',()=>{
            //adding event listener to restart quiz
            newGame();
        })
    }

}
//restarting all variables to start over quiz
function newGame(){
    let allCircles = document.querySelectorAll('.circle');
    allCircles.forEach(e=>{
        e.style.backgroundColor = 'white';
    })
    quiz.innerHTML='';
    curID = '';
    random = [];
    checked= [];
    correct ='';
    numberAnswered = 0;
    numberCorrect = 0;
    //re-display questions
    showQuiz(questions);
}


loadJSON(function (json) {
    pusher(json);
});