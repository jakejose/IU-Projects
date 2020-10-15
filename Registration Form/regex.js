// REGULAR EXPRESSIONS (REGEX)
// regex in JS --> /pattern/flags

// [] character classes (range)
// + one or more, * zero or more
// {1-3} one to three characters
// ? place after to indicate optional range or character
// | - matches several patterns ('or')
// +?, *?, ??, {}? - non-greedy versions
// \d digits \w characters a-zA-Z0-9_ \s space  \b word boundary
// . - any character except newlines
// () captured group
// g for global - match more than one
// /(\w+)\.mp3g/ - matches file names
// ^ start 
// $ end

let string = "Erika Lee, ebigalee@iu.edu, 812-855-4848";

// T/F
const exists = /@iu.edu/.test(string);
console.log('Exists?:', exists);

// string method
// returns index of match, or -1
let regex = /ee/g;
const search = string.search(regex);
console.log('Search:', search);

// returns a bunch of data in an array, or null
const exec = regex.exec(string);
console.log('Exec', exec);

// string methods
// returns a bunch of data in an array, or null
const match = string.match(regex);
console.log('Match', match[0]);

const matches = string.matchAll(regex);
for (let found of matches) {
    console.log('Matches', found[0]);
}

// Other related string methods:
// replace
// replaceAll
// split

// Grab the files and base filename!
string = "file1.mp3 file2.mp3 text.txt file.js";
regex = /(\w+)\.mp3/g;
let filename;
while (filename = regex.exec(string)) {
    console.log(filename[0], filename.index);
}

// Reverse the first and last names!
console.log(
    "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
    .replace(/(\w+), (\w+)/g, "$2 $1"));







