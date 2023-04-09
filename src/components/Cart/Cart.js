import React from 'react';
import './Cart.css';



const Cart = ({ cart }) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const gradTotal = total + shipping + tax;


    return (
        <div className='cart'>
            <h4>Order Summary </h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: {total} TK </p>
            <p>Total Shipping: {shipping} TK </p>
            <p>Tax: {tax} TK </p>
            <h5>Grand Total: {gradTotal.toFixed(2)} TK  </h5>
        </div>
    );
};

export default Cart;