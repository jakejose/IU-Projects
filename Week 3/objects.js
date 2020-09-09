'use strict';

console.log('hello')

const redPanda = {
Name : 'Sampson',
Species : 'Ailurus Fulgens',
commonName: 'Himalayan Red Panda',
age: 6,
favoriteFoods: ['apples', 'bananas'],
naturalHabitat: 'forrest',
conservationStatus: 'endangered',

}

//console.table (turns nested object into a table)


//

const munchies = (foods) =>
{
    yourFood = []
    
    yourFood.push(foods[Math.floor(Math.random()*foods.length)])

    str = ''
    for (const item of yourFood){
        str += item
    
    return str
    }
}
let yum = munchies(['doritos','cheetos','funions', 'lays', 'bugles',])

console.log("Your food is " + yum+ "!")