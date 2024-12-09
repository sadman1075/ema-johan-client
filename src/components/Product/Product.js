import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    
    const{name,img,price,seller,ratings}=props.product
   
    return (
        <div className='product'>
            <img src={img}></img>

            <div className='product-info'>
            <p className='product-name'>{name}</p>
             <p>Price:{price}$</p>
             <p ><small>Seller:{seller}</small></p>
             <p ><small>Ratings:{ratings}</small></p>
             </div>
             <button onClick={()=>props.handleaddtocart(props.product)} className='btn-cart'>
                <p className='p'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;