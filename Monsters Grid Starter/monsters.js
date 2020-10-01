// MONSTER DRAFT W/ CSS GRID
// Load monsters from JSON
// Create a 'card' in HTML for each monster player
//     Cards should appear in a grid - see the CSS
// When a player is clicked, add player to lineup:
//     Player card should visually show they are selected
//     Player's details should appear under "My Draft Lineup"
//     • If a player has already been selected, do not add
//     • If five players have already been added, 
//          alert the user that the lineup is full

/* <div class="player-card">
    <h3>Leanne Graham (Monster #1)
    <span>Bret</span>
    </h3>
    <h4>Contact: 1-770-736-8031 x56442 / Sincere@april.biz</h4>
</div> */




const cardList = document.querySelector('#card-list');

// Trick browser into loading JSON locally
function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'monsters-data.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(JSON.parse(xobj.responseText));
      }
    };
    xobj.send(null);  
}

function createCards(data){
  data.array.forEach(item => {
    let card =
  /*   `<div class="player-card">
    <h3>${item.name} (Monster # ${item.id}+1)
    <span>${item.username}</span>
    </h3>
    <h4>Contact: ${item.phone} / ${item.email}</h4>
</div>` */
`
<div class="card-container" data-index="${monster.id}">                
<img alt="monster" src="https://robohash.org/set_set2/bgset_bg0/${monster.id}?size=180x180"/>                
<h2>${monster.name}</h2>            
</div >
`
    
  })
  cardList.insertAdjacentHTML('beforeend', card);
};

// Load JSON and Start Program
loadJSON(function(json) {
    // console.log(json);
    // **** START HERE ****
    createCards(json);
});

//Most Powerful Grid Lines


