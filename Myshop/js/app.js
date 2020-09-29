const menu = document.querySelector('.menu')
const cart = document.querySelector('.cart')
const cartPrice = document.querySelector('.total')

//loop over shop data

shop_data.forEach(item => {
    const outer =
    `
    <div class = 'outer-${item.id}' style = '    display: flex; flex-direction: row; flex-wrap: wrap;'>
    <h2>
    ${item.title}
    </h2>
    </div> 
    `
    menu.insertAdjacentHTML('beforeend',outer);
    const outerDiv = document.querySelector(`.outer-${item.id}`)


    item.items.forEach(product => {

       

        const inner =
        `<div class = 'menu-item' style = 'background-image: url(${product.imageUrl})' data-index='${item.id}${product.id}'>
        <h3> ${product.name}</h3>
        <h4>${product.price}</h4>
        </div>`

        outerDiv.insertAdjacentHTML('beforeend',inner);
    })
})

let total = 0
function newItem(item){

    const val1 = item.dataset.index[0]-1
    const val2 = item.dataset.index[1]-1
    const currProduct = shop_data[val1].items[val2]
    //console.log(currProduct);

    const selectedItem = 
    `
    <div class ='selected-item'>
    <h3> Name - ${currProduct.name}</h3>
    <h4>Price - ${currProduct.price}</h4>
    </div>
    `

    cart.insertAdjacentHTML('beforeend', selectedItem)

    total += currProduct.price
    totalPrice(total)

}


function totalPrice(price){
    cartPrice.textContent = price
}


const items = document.querySelectorAll('.menu-item')
console.log(items)
let count = 0

items.forEach(item => {
    item.addEventListener('click', ()=>{
        count += 1;
        if (count<11){
            newItem(item)
        }else{
            alert('Cart lIMIT REACHED ')
        }
    })
})