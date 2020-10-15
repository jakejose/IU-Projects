"use strict";
console.log("js working");

// https://www.valentinog.com/blog/formdata/
// https://developer.mozilla.org/en-US/docs/Web/API/FormData
// https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

function displayErrorMsg(name) {



}

const form = document.forms[0];

form.addEventListener("submit", function () {
  event.preventDefault();
  // I don't understand this line
  new FormData(form);
});

form.addEventListener("formdata", (event) => {
  // event.formData grabs the object
  console.log(event.formData);
  // values / entries
  // grabs via the NAME attribute not ID

  const data = event.formData;
  const entries = [...data.entries()];
  console.log(entries);

  entries.forEach((entry) => {
  
    let name = entry[0];
    let value = entry[1];

    // HTML validator will only check if a@b works
    // Test to make sure your IU email address works
    if (name == "user_email") {
      const regex = /[\w]+@[\w]+\.[\w]+/g;
      const exec = regex.exec(value);
      if (exec) {
        console.log(exec);
        console.log("You inputted a valid email");
      } else {
        console.log("That wasn't a valid email");
      }
    }


    // zipcodes aren't auto validated, so we should
    // make sure it matches US zip format e.g. 47405-0102
    if (name == "user_zipcode") {
      const regex = /[\d]{5}|[\d]{5}\-[\d]{4}/g;
      const exec = regex.exec(value);
      if (exec) {
        console.log(exec);
        console.log("You inputted a valid zipcode");
      } else {
        console.log("That wasn't a valid zipcode");
      }
    }

    // phone numbers also are not validated
    // 812-855-4848
    // 8128554848
    // (812)855-4848
    // (812) 855-4848
    // match any of these formats, and if valid, replace with just digits
    // e.g. (812) 855-4848 -> 8128554848
    // update the form data
    if (name == "user_phone") {
      const regex = /[(]?[\d]+[-]?[)]?[\s]*[\d]+[-]?[\d]+/g;
      const exec = regex.exec(value);
      if (exec) {
        console.log(exec);
        console.log("You inputted a valid phone number");
      } else {
        console.log("That wasn't a valid phone number");
      } 
    }

    console.log(name, value);
  });

  const values = [...data.values()];
  console.log(values);

});