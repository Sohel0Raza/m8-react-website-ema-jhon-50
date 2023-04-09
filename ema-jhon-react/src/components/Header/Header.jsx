import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? "active" : "default"
                }>Shop</NavLink>
                <NavLink to="/orders" className={({ isActive }) =>
                    isActive ? "active" : "default"
                }>Orders</NavLink>
                <NavLink to="/inventory" className={({ isActive }) =>
                    isActive ? "active" : "default"
                }>Manage Inventory</NavLink>
                <NavLink to="/login" className={({ isActive }) =>
                    isActive ? "active" : "default"
                }>Login</NavLink>
            </div>
        </nav>
    );
};

export default Header;