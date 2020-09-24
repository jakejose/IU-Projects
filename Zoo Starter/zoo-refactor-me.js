'use strict';

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



loadJSON(function(data) {

    const h2 = document.querySelector('h2');

    let html = '';
    for (let animal of data) {
        html += `
        <article>
            <figure>
                <img src="images/${animal.name}.jpg" alt="${animal.commonName}">
                <figcaption>${animal.name}, ${animal.sex}, ${animal.age} years old, ${animal.weight}lbs</figcaption>
            </figure>
            <section>
                <h3><a href="#">${animal.commonName}</a></h3>
                <p>${animal.scientificName}</p>
                <p>${animal.description}</p>
                <h4>Native Region(s)</h4>
                <ul>
        `;

        for (let place of animal.nativeRegion) {
            html += `
                        <li>${place}</li>
            `;
        }

        html += `        </ul>
                <h4>Diet</h4>
                <ul><li>`;

        for (let i = 0; i < animal.diet.length; i++) {
            if (i === animal.diet.length - 1) {
                html += `and ${animal.diet[i]}`;
            } else {
                html += `${animal.diet[i]}, `;
            }
        }

        html += `</li></ul>
                <p>Status: ${animal.conservationStatus}</p>
                <button data-sound="${animal.sound}">Listen to the ${animal.commonName}</button>
            </section>
        </article>
        `
    }

    h2.insertAdjacentHTML('afterend', html);

    // get button HTML element
    const buttons = document.querySelectorAll('button');
    
    // connect each button to a function on click
    buttons.forEach(item => {
        item.addEventListener('click', function(e) {
            // console.log(e.target, this, this.textContent);
            // console.log(this.dataset.sound);
            let sound = this.dataset.sound;
            let audio = new Audio('sounds/' + sound);
            audio.play();
        })
    })

})