'use strict';
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



let questionIds = [];
let checked = [];
let randomNum = "";
//console.log(questionIds);

function pusher(data) {
    data.forEach(element => {
        questionIds.push(element.id);
        //console.log(questionIds);
    });
    randomNum += questionIds[Math.floor(Math.random() * questionIds.length)];
    console.log(randomNum);
}
//clear question
//do not allow same question
//move on to next queston
function next() {
    console.log(checked);
}

//inserting data into quiz
function showQuiz(data) {
    let q = '<ul>';
    pusher(data);
    data.forEach(element => {
        if (element.id === randomNum) {
            q +=
                `<h2>${element.question}</h2>
        `;
            for (const x in element.answers) {
                q +=
                    `<li><label for='${x}'>${x}: ${element.answers[x]}</label><br>
            <input class = 'image' type='image' id = '${x}' src = 'images/${element.answers[x]}.png'>
            </li>`;
            }
            checked.push(element.id);
        }
    });
    quiz.insertAdjacentHTML('afterbegin', q + "</ul>");
    let images = document.querySelectorAll('.image');
    clicker(images);
    
}

function clicker(items){
    items.forEach(e =>{
        e.addEventListener('click', ()=>{
            console.log(checked);
        })
    })
}

loadJSON(function (json) {
    //console.log(json);
    // do something with data
    showQuiz(json);
});