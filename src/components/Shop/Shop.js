import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom'; 

const Shop = () => {
    const products=useLoaderData()
    const [cart,setcart]=useState([])
 

    const handleaddtocart = (product) => {
        const newcart=[...cart,product]
        setcart(newcart)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id}
                        product={product}
                        handleaddtocart={handleaddtocart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart  cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;