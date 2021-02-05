'use strict';

console.log('working');
/* // if button is in the menu and is clicked 
// add text content into search bar value */
const menu = document.querySelectorAll('.rvt-dropdown__menu > button');
const search = document.querySelector('#search');
const searchButton = document.querySelector('#searchButton');
const modalEscape = document.querySelector('#rvt-button rvt-modal_close');
menu.forEach(button => {
    button.addEventListener('click', ()=>{
        search.value = button.textContent;
    })
});
/* //escape button exits modal */
window.addEventListener('keydown',(event)=>{
    if(event.keyCode == 27 && modalEscape){
        modalEscape.click();
    }
});
/* //enter key activates search button */
window.addEventListener('keydown',(event)=>{
    if(event.keyCode == 13){
        searchButton.click();
    }
});
/* //tester */
searchButton.addEventListener('click', ()=>{
    console.log('searchButton clicked')
});