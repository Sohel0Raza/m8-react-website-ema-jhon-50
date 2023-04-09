import React from 'react';
import './OrderSummary.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
const OrderSummary = ({ cart, handelClearCart, children}) => {
    // console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }
    const totalTax = totalPrice * 7 / 100;
    const grandPrice = totalPrice + totalShipping + totalTax;
    return (
        <div className='cart-summary'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${totalTax.toFixed(2)}</p>
            <h5>Grand Total: ${grandPrice.toFixed(2)}</h5>
            <button onClick={handelClearCart} className='btn-clear'>
                <span>Clear Cart </span>
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
            {children}
        </div>
    );
};

export default OrderSummary;