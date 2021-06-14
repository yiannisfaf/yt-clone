import React, { useState } from 'react';
import GoogleAuth from './GoogleAuth';
import { Link } from 'react-router-dom';

import logo from '../assets/youtube.png';

const Header = ({ onFormSubmit }: any) => {
    const [term, setTerm] = useState<string>('');  

    const onSubmit = (event:any) => {
        event.preventDefault();
        onFormSubmit(term);
    };

    return (
        <header className="header">
            <Link to="/" className="container-logo">
                <img className="logo" alt="logo" src={logo} />
                <div className="logo__title">
                    Youtube-Clone
                </div>
            </Link>

            <form onSubmit={onSubmit} className="search">
                <input 
                    type="text" 
                    className="search__input" 
                    placeholder="Search" 
                    value={term} 
                    onChange={(event) => setTerm(event.target.value)}
                />
                <button className="search__button">
                    <svg className="search__icon">
                        <use xlinkHref="img/sprite.svg#icon-magnifying-glass"></use>
                    </svg>
                </button>
            </form>

            <div className="signin">
                <GoogleAuth />
            </div>
        </header>
    );
};

export default Header;