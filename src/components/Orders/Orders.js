import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewIteams from '../ReviewIteams/ReviewIteams';
import Cart from '../Cart/Cart';
import './Orders.css';

const Orders = () => {
  const products = useLoaderData();
  return (
    
      <div className='div'>
        <div className='prod-container'>
          {
            products.map(product => <ReviewIteams product={product} key={product.id}></ReviewIteams>)
          }
        </div>

        <div className="cart-container">
          <h1>this is cart</h1>
          <Link to='/shipping'>
        <button>Shipping Orders</button>
      </Link>
        </div>
      </div>
     
    
  );
};

export default Orders;