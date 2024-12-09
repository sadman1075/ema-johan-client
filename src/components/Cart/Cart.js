import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = (props) => {
const {cart}=props;
console.log(cart)
let total=0;
let shipping=0;
let grandtotal=0;
for(const product of cart){
    total=total+product.price;
    shipping=shipping+product.shipping;
}

const tax=parseFloat((total*0.1).toFixed(2));


grandtotal=total+shipping+tax;


    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            
                <p>Seleted Iteams:{cart.length}</p>
                <p>Total Price:{total} $</p>
                <p>Total Shipping:{shipping}$</p>
                <p>Tax:{tax} $</p>
                <h5>Grant Total:{grandtotal.toFixed(2)} $</h5>

                <div>
                    <Link to='/orders'>
                    <button>Review Orders</button>
                    </Link>
                </div>
        </div>
    );
};

export default Cart;