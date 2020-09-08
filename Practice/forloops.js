var ourArray = [];
for (var i = 0; i <5; i++){
    ourArray.push(i);
}
console.log(ourArray)

var arr = [10,9,8,7,6];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

var word = prompt('Please enter a word: ')
var arr = ['a','e','i','o','u'];
string = " "
for (var i = 0; i < arr.length; i++) {
    if (word.includes(arr[i])){
    console.log((arr[i]));
    }
}

//I was only able to have this work by using var and I don't know why
//it kept giving me an error saying 'arr was already defined' 
//when I used len or const. Would like to know what I did wrong so
//I can refrain from using var. 

var word = prompt('Please enter a word: ')
var arr = ['a','e','i','o','u'];
string = " "
for (var i = 0; i < arr.length; i++) {
    if (word.includes(arr[i])){
        string += arr[i]
        string += " "
        
    }
}console.log(string);

const vowelFinder = () => {
var word = prompt('Please enter a word: ')
var arr = ['a','e','i','o','u'];
string = " "
for (var i = 0; i < arr.length; i++) {
    if (word.includes(arr[i])){
        string += arr[i]
        string += " "
        
    }
}console.log(string);

}