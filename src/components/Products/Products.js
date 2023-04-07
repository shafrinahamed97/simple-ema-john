import React from 'react';
import './Products.css';

const Products = (props) => {

    const { name, img, seller, price, ratings } = props.product;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: {price} Tk</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} starts</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Products;