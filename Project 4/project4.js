'use strict';
console.log('working!');

const display = document.querySelector('.display');
//console.log(display);

let allLeagues = [];

function getLeagues(){
    //source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
    .then(response=>response.json())
    .then(data=>allLeagues.push(data.leagues));


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

}

getData('4380');