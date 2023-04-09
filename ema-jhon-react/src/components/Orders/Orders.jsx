import React, { useState } from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const SaveCarts = useLoaderData();
    const [cart, setCart] = useState(SaveCarts)
    // console.log(carts)
    const handelRemoveSaveCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id)
    }

    const handelClearCart = () => {
        setCart([])
        deleteShoppingCart();
    }
    return (
        <div>
            <div className='shop-container'>
                <div>
                    <h2>Orders page</h2>
                    <div className='review-container'>
                        {
                            cart.map(cart => <ReviewItem
                                key={cart.id}
                                product={cart}
                                handelRemoveSaveCart={handelRemoveSaveCart}
                            ></ReviewItem>)
                        }
                    </div>
                </div>
                <div className='cart-container'>
                    <OrderSummary
                        cart={cart}
                        handelClearCart={handelClearCart}
                    >
                        <Link to="/inventory">
                            <button className='btn-review'>
                                <span>Proceed Checkout </span>
                            </button>
                        </Link>
                    </OrderSummary>
                </div>
            </div>
        </div>
    );
};

export default Orders;