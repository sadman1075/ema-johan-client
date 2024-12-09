import React from 'react';
import './ReviewIteams.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';

const ReviewIteams = ({ product }) => {
    const { img, name, shiping, price, quantity } = product
    return (
        <div className='All'>
            <div className='review'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='review-details'>
                    <p>{name}</p>
                    <p><small>Price:{price}</small></p>
                    <p><small>Quantity:{quantity}</small></p>
                    <p><small>Shiping:{shiping}</small></p>
                </div>
            </div>

            <div>
                <button onClick={()=>{alert("Are you sure you want to delet this iteam?")}} className='btn-delete'>
                    <FontAwesomeIcon className='icon' icon={faTrash}>

                    </FontAwesomeIcon>
                </button>
            </div>

        </div>
    );
};

export default ReviewIteams;