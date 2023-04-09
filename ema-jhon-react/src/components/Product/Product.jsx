import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img, name, price, seller, ratings, id} = props.product
    // console.log(props)
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating: {ratings} start</p>
            </div>
            <button className='cart-btn' onClick={() => handleAddToCart(props.product)}>
                Add to Cart  <FontAwesomeIcon icon= {faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;