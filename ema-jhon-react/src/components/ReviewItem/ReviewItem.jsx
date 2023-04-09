import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const ReviewItem = ({ product , handelRemoveSaveCart, children}) => {
    const {id, name, img, price, quantity
    } = product;
    return (
        <div className='review-item'>
            <div className='item'>
                <img src={img} alt="" />
                <div className='item-info'>
                    <h3>{name}</h3>
                    <p>Price: ${price}</p>
                    <p>Order Quantity: ${quantity}</p>
                </div>
            </div>
            <button onClick={()=>handelRemoveSaveCart(id)} className='dlt-btn'><FontAwesomeIcon className='dlt-icon' icon={faTrashCan} /></button>
            {children}
        </div>
    );
};

export default ReviewItem;