console.log(`it's alive!`);
// code to read in the JSON
function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'js/drugs.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(JSON.parse(xobj.responseText));
      }
    };
    xobj.send(null);  
}

function showPics(data) {
  const drugs = document.querySelector('#drugs');
  let pic = '';
 
  data.forEach(item => {
    pic+=
    `
    <figure data-drug-name="${item.name};" data-drug-amount=${item.amount}>
        	<img src="images/${item.slug}.jpg" alt="excedrin">
         <figcaption>${item.name}</figcaption>
      </figure>
    `;

  });
  drugs.insertAdjacentHTML('beforeend', pic);
  let figs = document.querySelectorAll('figure');
  figs.forEach(item => {
    item.addEventListener('click',function(){
      selectDrug(item);


    })
  })
};

let total = 0;
function selectDrug (drug){
  drug.classList.toggle('figure.selected');


//grab amount from item
total += parseInt(drug.getAttribute('data-drug-amount'));
console.log(total);

//update total variable

//up progress bar level based on total
//update the label of progress bar
let percent = Math.floor((total / 15000)*100);
//console.log(percent);

const progress = document.querySelector('span');
const label = document.querySelector('.label');
if (percent <= 100){
progress.style = `height: ${percent}%`
label.style = `height: ${percent}%`
}else{
  progress.style = `height: 100%`
  label.style = `height: 100%`
  console.log('Overdose!');
};


label.textContent = total +'mg'
if (total >= 15000){
  label.textContent = 
  `
  ${total} mg 
  OVERDOSE!  `
}

//update the messsage
//includes total 

let totalMesage = document.querySelector('.total');
let message = document.querySelector('#message');
//console.log(totalMesage);

totalMesage.textContent = total;

let newMessage =
`
<h4>
Total:
</h4>
`;
let newMessage2 = 
`
<h4>
Milligrams
</h4>
<p id= 'psa'></p>
`;


if (total < 4000){
// text is black
message.insertAdjacentHTML('afterbegin',newMessage);
message.insertAdjacentHTML('beforeend',newMessage2);
totalMesage.style.cssText = 'color: black; font-size: 25px;';
}
if (total > 4000 && total < 8000){
  totalMesage.style.cssText = 'color: #D5B612; font-size: 25px;';
  let psa =
  `You've exceeded the FDA’s recommended maximum 
  daily limit of acetaminophen.`;
  document.getElementById('psa').innerText = psa
}
if(total > 8000 && total < 15000){
  totalMesage.style.cssText = 'color: #D17827; font-size: 25px;';
  let psa =
  `You've exceeded the level at which liver 
  damage can occur if taken for several days, 
  according to McNeil, the maker of Tylenol.`;
  document.getElementById('psa').innerText = psa
}
if(total >= 15000){
  totalMesage.style.cssText = 'color: #C20802; font-size: 25px;';
  let psa =
  `You've exceeded the threshold toxic dose of acetaminophen. 
  A single dose at this level can result in death, 
  according to medical experts and literature.`;
  document.getElementById('psa').innerText = psa
}

//record selected drugs in an array
drug.setAttribute('style', 'figure.selected');
//alter CSS when figure is selected
//apply class

};





loadJSON(function(json) {
    console.log(json);
    // do something with data
    showPics(json);
    
});



// PART ONE
// Dynamically generate HTML for each drug from JSON-formatted content
// So, using the data in drugs.js, format HTML for each drug to look like the example
// and then insert that HTML into #drugs

// NOTE: Each drug's daily limit of acetaminophen in mg

//   EXAMPLE OF WHAT THE HTML SHOULD LOOK LIKE:
//   <figure data-drug-name="Excedrin&reg;" data-drug-amount="2000">
//     	<img src="images/excedrin.jpg" alt="excedrin">
//      <figcaption>Excedrin&reg;</figcaption>
//   </figure>



// PART TWO - see css/styles.css

// PART THREE
// Connect each drug to an action:
// - updates total amount of acetaminophen taken so far (total dose)
// - select the drug visually - add a CSS class so drug appears to be selected (first column)
// - updates "lethal dose" bar's height (second column)
// - updates the bar's label (second column)
// - updates total dose and warning message (third column)



// THRESHOLDS
// total < 4000
// text is black
// No message update


// total < 8000
// text is '#D5B612'
// `You've exceeded the FDA’s recommended maximum daily limit of acetaminophen.`

// total < 15000
// text is '#D17827'
// `You've exceeded the level at which liver damage can occur if taken for several days, according to McNeil, the maker of Tylenol.`

// total >= 15000
// text is '#C20802'
// `You've exceeded the threshold toxic dose of acetaminophen. A single dose at this level can result in death, according to medical experts and literature.`

// BONUS
// Create a way for the drug to be unselected 
// and thus removed from the total / tally
