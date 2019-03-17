"use strict"
const name = 'Andrew'
const userAge = 37;

const user = {
    name,
    userAge,
    location: 'Philadelphia'
}


console.log(user);


//object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salesPrice: undefined,
    rating: 4.3
}

// const label = product.label;
// const stock = product.stock;


//destructuring
// const {label: productLabel, stock, rating=5} = product;
//
// console.log(productLabel);
// console.log(stock);
// console.log(rating)

const transaction = (type, {label, stock}) =>{
    console.log(type, label, stock)
}
transaction('order', product);
