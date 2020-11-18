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
        let id = team.idTeam
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



function cardClicker(description){
    let teams = document.querySelectorAll('.images');
    let curTeamID = 0;
    let i = '';
    teams.forEach(team =>{
        team.addEventListener('click',()=>{
            curTeamID = parseInt(team.id);
            console.log(curTeamID);
            getDetails(curTeamID);
        })
        })
    }

let inner = document.querySelector('.inner');
let outer = document.querySelector('.outer');
const getDetails = async details =>{
    const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${details}`);
    if (!response.ok){
        console.log('error grabbing API');
        return;
    }
    const data = await response.json();
    let newData = data.teams;
    console.log(newData[0]);

    let innerDes =
    `<h3>${newData[0].strTeam} (${newData[0].strTeamShort})</h3>
        <h3> ${newData[0].strLeague}</h3>
        <h4>Location: ${newData[0].strStadiumLocation}</h4>
        <h4>Stadium: ${newData[0].strStadium}</h4>
        <h4>Year Founded: ${newData[0].intFormedYear}</h4>
    ` 
    inner.innerHTML = innerDes; 
    outer.classList.add('open');
}

outer.addEventListener('click',()=>{
    outer.classList.remove('open');
  })
  
  window.addEventListener('keydown', (event)=>
  {
    if(event.keyCode == 27){
    outer.classList.remove('open');
    }
})