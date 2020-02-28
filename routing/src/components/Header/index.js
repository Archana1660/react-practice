import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

const Header = () => (
    <ul className="header-wrapper">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/tshirts">T-Shirts</Link></li>
    </ul>
)

export default Header;