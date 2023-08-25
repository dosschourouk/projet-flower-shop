let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');     
let cartQuantity = 0;
// opzning the shopping cart
openShopping.addEventListener('click', () => {
    body.classList.add('active');
});
//closing the shopping cart
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});
//array pf products
let products = [
    {
        id: 1,
        name: 'Flower Pot',
        image: 'images (3).jpg',
        price: 70
    },
    {
        id: 2,
        name: 'Flower Pot',
        image: 'images (4).jpg',
        price: 80
    },
    {
        id: 3,
        name: 'Flower Pot',
        image: 'téléchargement.jpg',
        price: 80.5
    },
    {
        id: 4,
        name: 'Flower Pot',
        image: 'téléchargement (3).jpg',
        price: 90
    },
    {
        id: 5,
        name: 'Flower Pot',
        image: 'cycster.webp',
        price: 90.5
    },
    {
        id: 6,
        name: 'Flower Pot ',
        image: 'téléchargement3.jpg',
        price: 100
    },
    {
        id: 7,
        name: 'Flower Pot',
        image: 'téléchargement (1).jpg',
        price: 105
    },
    {
        id: 8,
        name: 'Flower Pot',
        image: 'images (1).jpg',
        price: 110
    },
    {
        id: 9,
        name: 'Flower Pot',
        image: 'images (2).jpg',
        price: 115
    },


];
//array to store selected items
let listCards = [];
//create a function for adding cards in html page using loop and if else statements
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="projet flower shop/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}DT</div>
            <button onclick="ajouter au panier(${key})">ajouter au panier</button>`;
        list.appendChild(newDiv);
    })
}
// create a function that will add the item into card array when clicked on button
initApp();
//create a function to remove an element from the cart
function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
//Function to reload and update the cart
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        // Updating the total price and quantity
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            // Creating a new card item
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="projet flower shop/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()} DT</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
// Function to change the quantity of an item in the cart
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

