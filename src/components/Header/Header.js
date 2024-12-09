import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { Authcontex } from '../Contex/UserContex';

const Header = () => {
    const { user,logout } = useContext(Authcontex)
    return (
        <div>
            <nav className='nav' >

                <img src={logo}></img>
                <div className='link'>
                    <span className='span'>{user?.email}</span>
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    {
                        user?.uid ? <button className='logout' onClick={logout}>Logout</button> :
                            <>
                                <Link to="/login">LogIn</Link>
                                <Link to="/singup">SingUp</Link>
                            </>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;