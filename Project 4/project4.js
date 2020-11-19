'use strict';
console.log('working!');
//API SOURCE: https://www.thesportsdb.com/api.php

//grabbing display div
const display = document.querySelector('.display');
//all leagues array to hold most of data
let allLeagues = [];

function getLeagues(){
    //fetching a list of all the leagues and putting data into an array
    //source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
    .then(response=>response.json())
    .then(data=>data.leagues.forEach(l =>{
        allLeagues.push(l);
    }));
}
getLeagues();
console.log(allLeagues);
//div to place event button
let eventDiv = document.querySelector('.event');
const getData = async league => {
    //fetching league specific data (the teams)
    const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${league}`);
    if (!response.ok){
        console.log('error grabbing API');
        return;
    }
    //assigning response json to a variable and pulling team data into all variable
    const data = await response.json();
    const all = data.teams;
    //error checking
    if (all == null){
        alert('CANNOT FIND LEAGUE IN DATABASE! TRY : NFL, NBA, OR NHL')
    }else{
        //adding event button
    eventDiv.innerHTML = `<button id = 'eventbutton'>View Last 15 Events</button>`
    //adding team cards
    all.forEach(team => {
        let t= '';
        let name = team.strTeam;
        let badge = team.strTeamBadge;
        let id = team.idTeam
        t += `<div class = 'images' id = '${id}'>
        <h4>${name}</h4>
        <img class = 'logo'src = ${badge}>
        </div>
        ` 
        display.insertAdjacentHTML('beforeend',t);
    });
    //adding click functionality
    cardClicker();
}}
//current ID for league searched
let curID = 0;
//user input
let curInput = '';
//grabbing search button, lookup bar, and legend
let button = document.querySelector('#button');
let lookup = document.querySelector('#lookup');
let legend = document.querySelector('.legend');
//adding event listeners to button and enter key
button.addEventListener('click',()=>{
        searcher(); //search function
})
window.addEventListener('keydown',(event)=>{
    if(event.keyCode == 13){
        searcher();
    }
});
function searcher(){
    //refreshing search
    refresher();
    legend.innerHTML='';
    //trimming out spaces entered in search
    curInput = lookup.value.trim();
    allLeagues.forEach(l =>{
        //error handling fro user entry
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
    eventDiv.innerHTML='';
}
function cardClicker(){
    //grabbing team cards and adding event listeners
    let teams = document.querySelectorAll('.images');
    let curTeamID = 0;
    teams.forEach(team =>{
        team.addEventListener('click',()=>{
            curTeamID = parseInt(team.id);
            console.log(curTeamID);
            getDetails(curTeamID);
        })
        })
    }
//inner/outer grabs
let inner = document.querySelector('.inner');
let outer = document.querySelector('.outer');
const getDetails = async details =>{
    //fetching team details
    const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${details}`);
    if (!response.ok){
        console.log('error grabbing API');
        return;
    }
    const data = await response.json();
    let newData = data.teams;
    let short = ''
    let picture='';
    //missing data handling
    if(newData[0].strTeamShort == null){
        short = newData[0].strTeam.substring(0,3).toUpperCase();
    }
    else{short = newData[0].strTeamShort;}

    if(newData[0].strTeamFanart2 == null){
        picture = 'icon.png'
    }
    else{picture = newData[0].strTeamFanart2}
    //inserting team data that will be seen upon card click
    let innerDes =
    `<h5> ${newData[0].strLeague}</h5>
    <h3>${newData[0].strTeam} (${short})</h3>
    <img class = 'badge' src = '${newData[0].strTeamBadge}'>
    <img class = 'pic' src = '${picture}'>
        <h4>Location: ${newData[0].strStadiumLocation}</h4>
        <h4>Stadium: ${newData[0].strStadium}</h4>
        <h4>Year Founded: ${newData[0].intFormedYear}</h4>
        <p>${newData[0].strDescriptionEN}</p>
    ` 
    //assigning innerHTML and opening outer (like modal from class)
    inner.innerHTML = innerDes; 
    outer.classList.add('open');
}
//outer exit click and esc event listener
outer.addEventListener('click',()=>{
    outer.classList.remove('open');
  })
  
  window.addEventListener('keydown', (event)=>
  {
    if(event.keyCode == 27){
    outer.classList.remove('open');
    }
})
//event listener for event button
eventDiv.addEventListener('click',()=>{
    console.log(curID);
    viewEvents(curID);

})
const viewEvents = async events =>{
    //fetching event data for specific league
    const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=${events}`);
    if (!response.ok){
        console.log('error grabbing API');
        return;
    }
    const data = await response.json();
    let newEvents = data.events;
    console.log(newEvents);
    let scores = '';
    let away = '';
    let home = '';
    //adding event data to the inner div
    newEvents.forEach(event=>{
        //missing data error handling
        if(event.intAwayScore==null&&event.intHomeScore==null){
            away = 'Not Found';
            home = 'Not Found';
        }
        else{
            away = event.intAwayScore;
            home = event.intHomeScore;
        }
        scores += 
        `<p><u>${event.dateEventLocal}</u></p>
        <h3>${event.strEventAlternate}</h3>
        <p><strong>Score: ${away} - ${home}</strong></p>
        ` 
    })
    inner.innerHTML=scores;
    outer.classList.add('open');
}