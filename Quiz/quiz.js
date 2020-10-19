'use strict';

// (1) Select the quiz elements in the HTML

// (2) Set up variables to keep track of: 
//  - which question we are on (index?)
//  - total score

// when final score is revealed, pair it with an icon
let scoreScale = ['<i class="far fa-sad-cry"></i>','<i class="far fa-sad-tear"></i>','<i class="far fa-meh"></i>','<i class="far fa-smile-beam"></i>', '<i class="far fa-grin-stars"></i>'];

// quiz questions and answers
let questions = [
    {
        question: "What is the collective noun for a group of unicorns?",
        answers: {
            a: "A blessing",
            b: "A union",
            c: "A cloud"
        },
        correct: "a"
    },
    {
        question: "What is the most common color of toilet paper in France?",
        answers: {
            a: "White",
            b: "Blue",
            c: "Pink"
        },
        correct: "c"
    },
    {
        question: "What were the first ice hockey pucks made out of?",
        answers: {
            a: "Smashed cans",
            b: "Frozen cow dung",
            c: "Slab of salami"
        }, 
        correct: "b"
    },
    {
        question: "Who invented the word vomit?",
        answers: {
            a: "Mark Twain",
            b: "D.H. Lawrence",
            c: "William Shakespeare"
        },
        correct: "c"
    },
    {
        question: "Where was the fortune cookie invented?",
        answers: {
            a: "Shanghai",
            b: "San Francisco",
            c: "Singapore"
        },
        correct: "b"
    }
];

// (8) Check a question
//  - is the answer right or wrong
//  - update the total score and markers


// (7) Display next question
//  - make sure you check the answer on the current one first (#8)
//  - update index and display the next question
//  - or if it's the last question:
//    hide the question / answers / button
//    reveal the total score, including an icon (using scoreScale)


// (4) Display question markers in progress bar
//  - each marker should represent a specific question
// <div class="marker" data-marker="0"></div>


// (5) Display the question and possible answer choices
// <p>
//     <input type="radio" name="choice" id="choiceA" value="A">
//     <label for="choiceA">Choice A</label>
// </p>


// (6) Add an event listener to "Next" button
//  - when clicked, go to a callback


// START QUIZ
// What are these () around my function?
// "immediately executed function expression"
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(function startQuiz() {
    // (3) Set up to start quiz:
    //  - display markers in progress bar (empty, one per question)
    //  - display first question
})();
