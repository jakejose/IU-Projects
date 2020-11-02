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
//questions list
let questions = [];
let random = [];
let checked= [];
let correct ='';
let numberAnswered = 0;
let numberCorrect = 0;
//push json into a list 
function pusher(data){
  data.forEach(item => {
    questions.push(item);
    
  });
showQuiz(questions);
}
//display data
function showQuiz(questions){
    random.push(questions[Math.floor(Math.random() * questions.length)]);
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
                    <li><label for='${x}'>${x}: ${e.answers[x]}</label><br>
            <input class = 'image' type='image' id = '${x}' src = 'images/${e.answers[x]}.png'>
            </li>
            </center>`;
            } 
            checked.push(e);
            correct += e.correct;
        } 

    });
    
    quiz.insertAdjacentHTML('afterbegin', q + "</ul>");
    let images = document.querySelectorAll('.image');
    clicker(images);}


function clicker(items){
    items.forEach(e =>{
        e.addEventListener('click', ()=>{
            numberAnswered += 1
            if(correct.includes(e.id)){
                numberCorrect += 1
                console.log(numberCorrect);
                console.log(numberAnswered);
            }
            next();
        })
    })
}

function next(){
    quiz.innerHTML='';
    correct = '';
    random = [];
    showQuiz(questions);

}



loadJSON(function (json) {
    //console.log(json);
    // do something with data
    pusher(json);


});