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

loadJSON(function(json) {
    // console.log(json);
    // do something with data
    
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
