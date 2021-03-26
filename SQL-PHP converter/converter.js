'use strict';
console.log('its alive!');

submitClicker();

//intialize
function submitClicker(){
    const submit = document.querySelector('#submit');
    submit.onclick = ()=>{startConvert();}
}

//string split
function startConvert(submit){
    let query = document.querySelector('#query').value; 
    let querySplit = query.split(" ");

    let variableRegex = /([$])\w+/g;
    let found = query.match(variableRegex);

    console.log(found);
    let foundNew = []
    for(let e of found){
        let eIndex = querySplit.indexOf(e);
        console.log(eIndex);
        if(querySplit[eIndex-1] == '='){
            foundNew.push(`'${e}'`);
        }
        else{
        foundNew.push(` ".${e}." `);
        }
    }
    console.log(foundNew);

    let final = []
    for (let i = 0; i < querySplit.length; i++) {
        if (found.includes(querySplit[i])){
            let index = found.indexOf(querySplit[i]);
            final.push(foundNew[index]);
      }
      else{
          final.push(querySplit[i]);
      }
    }
    console.log(final);
    toPHP(final);
}

function toPHP(final){
    let phpBox = document.querySelector('#convert');

    let string ='$sql = ' + '"'+final.join(" ")+'";';
    phpBox.value = string;
}