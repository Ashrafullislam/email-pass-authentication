import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/SignUp' > Sign up </Link>
            <Link to='/Login' > Log in</Link>            
        </div>
    );
};

export default Header;