// const vowelFinder = () => {
//     var word = prompt('Please enter a word: ')
//     var arr = ['a','e','i','o','u'];
//     string = " "
//     for (var i = 0; i < arr.length; i++) {
//         if (word.includes(arr[i])){
//             string += arr[i]
//             string += " "
//             document.getElementById('vowels'+arr[i]).innerHTML = '<li>'+string+'</li>';
            
//         }
//     }document.getElementById('sentence').innerHTML ='The vowels in "'+word+'" are:'
    
//     }


    const vowelFinder = () => {
    var word = prompt('Please enter a word: ')
    astring = ' '
    estring = ' '
    istring= ' '
    ostring = ' '
    ustring= ' '
    //for (var i = 0; i < word.length; i++){
    if (word.includes('a')) {
        astring += 'a'
    }
    if (word.includes('e')) {
        estring += 'e' 
    }
    if (word.includes('i')) {
        istring += 'i'  
    }
    if (word.includes('o')) {
        ostring += 'o'   
    }
    if (word.includes('u')) {
        ustring += 'u'
    }
    //}
    document.getElementById('vowelsa').innerHTML = '<li>'+astring+'</li>';
    document.getElementById('vowelse').innerHTML = '<li>'+estring+'</li>';
    document.getElementById('vowelsi').innerHTML = '<li>'+istring+'</li>';
    document.getElementById('vowelso').innerHTML = '<li>'+ostring+'</li>';
    document.getElementById('vowelsu').innerHTML = '<li>'+ustring+'</li>';

    document.getElementById('sentence').innerHTML ='The vowels in "'+word+'" are:'
}

//Algorithm for Vowel Print

//prompt the user for a string

//convert the string to lowercase 

//check the string for vowels
    //function vowelprinter takes string
    //look through / loop each letter
    //check for vowels (for loop is better because there is a definite limit)
    // for loop message.length
    //check each letter to see if it is a vowel
    //conditional - if/else
    //'aeiou' - .includes() -logic
    //if vowel = print (insert into html)
    //if not - skip

    //