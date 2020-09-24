'use strict';

// ALGORITHM:
// (1) code to read in the JSON (provided)
// (2) create page using JSON data
// (3) connect buttons to function on click
// ****************************************


// (3) connect buttons to function on click
const buttons = document.querySelectorAll('button');

buttons.forEach(item, index, array ) =>{
  item.addEventListener('click', function(e){

// console.log('index', index);            
// console.log('array', array);            
// console.log('this', this);            
// console.log('item', item);            
// console.log(event.target);

    let sound = this.dataset.sound;
    let audio = new Audio('sounds/' + sound);
    audio.play();
  })
}

// (2) create page using JSON data
const createPage = (data) => {
    // console.log(data);

};

// (1B) code to read in the JSON
function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'zoo.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(JSON.parse(xobj.responseText));
      }
    };
    xobj.send(null);  
}

// (1A) runs as soon as it's seen in JS
loadJSON(function(json) {
    // console.log(json);
    // START HERE
    createPage(json);
});
