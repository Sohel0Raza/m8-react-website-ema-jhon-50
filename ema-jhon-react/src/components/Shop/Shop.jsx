import React, { useEffect, useState } from 'react';
import { addToDatabase, getShoppingCart } from '../../../public/dataBase';
import OrderSummary from '../OrderSummary/OrderSummary';
import Product from '../Product/Product';
import './Shop.css'
import { deleteShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts((data)))
  }, [])
  useEffect(() =>{
    const storedCart = getShoppingCart()
    const saveCart = [];
    // step 1: get id of the added product
    for(const id in storedCart){
      // step 2: get product from products state by using id
      const addedProduct = products.find(product => product.id === id)
      if(addedProduct){
        // step 3: add quantity
        const quantity = storedCart[id]
        addedProduct.quantity = quantity;

        // step 4: add the added product to the saved cart
        saveCart.push(addedProduct)
      }
      // step 5: set the cart
      setCart(saveCart)
    }
  },[products])
  const handleAddToCart = (product) =>{
    const newCart = [...cart , product]
    console.log('product :', product);
    console.log('newCart :', newCart);

    setCart(newCart)
    addToDatabase(product.id)
  }
  const handelClearCart = () =>{
    setCart([])
    deleteShoppingCart()
}
  return (
    <div className='shop-container'>
      <div className='products-container'>
        {
          products.map(product => <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          ></Product>)
        }
      </div>
      <div className='cart-container'>
        <OrderSummary 
        cart={cart}
        handelClearCart={handelClearCart}
        >
          <Link to="/orders">
          <button className='btn-review'>
           <span>Review Order </span> 
           <FontAwesomeIcon icon={faArrowRight} />
          </button>
          </Link>

        </OrderSummary>
      </div>
    </div>
  );
};

export default Shop;