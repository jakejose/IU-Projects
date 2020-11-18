'use strict';
console.log('working!');

const display = document.querySelector('.display');
//console.log(display);

let allLeagues = [];

function getLeagues(){
    //source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
    .then(response=>response.json())
    .then(data=>data.leagues.forEach(l =>{
        allLeagues.push(l);
    }));
}

getLeagues();
console.log(allLeagues);
const getData = async league => {
    const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${league}`);
    if (!response.ok){
        console.log('error grabbing API');
        return;
    }
    const data = await response.json();
    const all = data.teams;
    all.forEach(team => {
        let t= '';
        let name = team.strTeam;
        let badge = team.strTeamBadge;
        let id = team.idTeaml
        t += `<div class = 'images' id = '${id}'>
        <h4>${name}</h4>
        <img src = ${badge}>
        </div>
        ` 
        //console.log(t);
        display.insertAdjacentHTML('beforeend',t);
    });
    cardClicker();
}
let curID = 0;
let curInput = '';
let button = document.querySelector('#button');
let lookup = document.querySelector('#lookup');
let legend = document.querySelector('.legend');
button.addEventListener('click',()=>{
        searcher();      
})

window.addEventListener('keydown',(event)=>{
    if(event.keyCode == 13){
        searcher();
    }
});
function searcher(){
    refresher();
    legend.innerHTML='';
    curInput = lookup.value;
    allLeagues.forEach(l =>{
        if (curInput.length<=4){
            curInput = curInput.toUpperCase();
        }
        if (curInput==l.strLeague||curInput==l.strLeagueAlternate){
            curID = parseInt(l.idLeague);
        }
    })
    console.log(curID);
    getData(curID);
    
}
function refresher(){
    curID = 0;
    display.innerHTML = '';
}
function show (){
    console.log('hello');
}



function cardClicker(){
    let inner = document.querySelector('.inner');
    let teams = document.querySelectorAll('.images');
    teams.forEach(team =>{
        team.addEventListener('click',()=>{
            console.log('hello');
        })
    })
}