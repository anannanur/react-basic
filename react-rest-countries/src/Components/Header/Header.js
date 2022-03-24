import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div style={{backgroundColor: 'darkcyan'}}>
            <div className='header-container'>
            <h2>Welcome!!</h2>
            <nav>
                <a href="/home">Home</a>
                <a href="/countries">Countries</a>
                <a href="/about">About</a>
            </nav>
            </div>
        </div>
    );
};

export default Header;