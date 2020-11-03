"use strict";
console.log('working');

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

let quiz = document.querySelector('.quiz');
let circles = document.querySelector('.marker');
//questions list
let questions = [];
let random = [];
let checked= [];
let correct ='';
let numberAnswered = 0;
let numberCorrect = 0;
//push json into a list 
function pusher(data){
let marker = '';
  data.forEach(item => {
    marker += `<div class ='circle' name = ${item.id}></div>`
    questions.push(item);
  });
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
//display data
let curID=''
function showQuiz(questions){
    console.log(questions);
    random.push(questions[numberAnswered]);
    console.log(random);
    //random.push(questions[Math.floor(Math.random() * questions.length)]);
    let q = '<ul>';
    
    questions.forEach(e =>{

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
            checked.push(e);
            correct += e.correct;
            curID += e.id;

        } 

    });
    
    quiz.insertAdjacentHTML('afterbegin', q + "</ul>");
    let images = document.querySelectorAll('.image');
    clicker(images);}



function clicker(items){
    items.forEach(e =>{
        e.addEventListener('click', ()=>{
            numberAnswered += 1
            let answer = document.querySelector(`div[name = '${numberAnswered-1}']`);
            console.log(answer);
            if(correct.includes(e.id)){
                answer.style.backgroundColor = "green";
                numberCorrect += 1
                console.log(numberCorrect);
                console.log(numberAnswered);
                console.log(e.id);
            }else{
                answer.style.backgroundColor = "red";
            }
            next();
        })
    })
}

function next(){
    quiz.innerHTML='';
    correct = '';
    curID='';
    random = [];
    showQuiz(questions);
    let results = '';
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
        
        quiz.insertAdjacentHTML("afterbegin",results);
        let reset = document.querySelector('#reset');
        reset.addEventListener('click',()=>{
            newGame();
        })
    }

}

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
    showQuiz(questions);
}


loadJSON(function (json) {
    //console.log(json);
    // do something with data
    pusher(json);


});