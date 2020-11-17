'use strict';
console.log('working!');

const getData = async league => {
    const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${league}`);
    if (!response.ok){
        console.log('error grabbing API');
        return;
    }

    const data = await response.json();

    console.log(data);
}

getData('4391');