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
//showing picture data from JSON
function showPics(data) {
  const drugs = document.querySelector('#drugs');
  let pic = '';
 //for each injecting data into html
  data.forEach(item => {
    pic+=
    `
    <figure data-drug-name="${item.name};" data-drug-amount=${item.amount}>
        	<img src="images/${item.slug}.jpg" alt="excedrin">
         <figcaption>${item.name}</figcaption>
      </figure>
    `;

  });
  //inserting data
  drugs.insertAdjacentHTML('beforeend', pic);
  //selecting the data to be used
  let figs = document.querySelectorAll('figure');
  //adding event listener
  figs.forEach(item => {
    item.addEventListener('click',function(){
      selectDrug(item);


    })
  })
};
//total
let total = 0;

//let drugArray = []bonus atttempt
function selectDrug (drug){
//grab amount from item
total += parseInt(drug.getAttribute('data-drug-amount'));
console.log(total);

//update total variable

//up progress bar level based on total
//update the label of progress bar
let percent = Math.floor((total / 15000)*100);

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

//forming message to be outputted upon click

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

//conditionals for miligram threshold
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
//could not figure this part out but here are a couple of attempts
drug.classList.toggle('figure.selected');
drug.setAttribute('style', 'box-shadow: 2px 2px 3px black;');
//alter CSS when figure is selected
//apply class

//drugArray.push(drug); bonus attempt

};




loadJSON(function(json) {
    console.log(json);
    // do something with data
    showPics(json);
    
});



// BONUS
// Create a way for the drug to be unselected 


// and thus removed from the total / tally
//attmepting bonus

//function remove (array){
//array.forEach(item =>{
//array.remove(item);
//})
//}remove(drugArray);


//would have needed to include another event listener