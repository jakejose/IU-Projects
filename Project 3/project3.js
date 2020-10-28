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
//console.log(quiz);
let questionIds = ["1","2"];
let randomQ = questionIds[Math.floor(Math.random()*questionIds.length)];
console.log(randomQ);
function showQuiz(data){
    let q = ''
    data.forEach(element => {
        if(element.id === randomQ){
        q +=
        `<h2>${element.question}</h2>;
        `
        for (const x in element.answers){
            q+=
            `<button id = '${x}'>${x}: ${element.answers[x]}</button>`;
        }
    }
    });
    quiz.insertAdjacentHTML('afterbegin',q);
}



loadJSON(function(json) {
    //console.log(json);
    // do something with data

    showQuiz(json);
});