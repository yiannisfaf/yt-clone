import React from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypeSelector';
import useSubs from '../hooks/useSubs';


const Sidebar = () => {
    const { isSignedIn, userId } = useTypedSelector((state) => state.auth);
    console.log(useSubs(userId));

    const selectedDiv = (path:String) => {
        if (window.location.pathname === path) {
            return "side-nav__item side-nav__item--active";
        } else {
            return "side-nav__item side-nav__item";
        }
    }

    return (
        <nav className="sidebar">
            <ul className="side-nav">
                <Link to="/" className={selectedDiv("/")}>
                    <a href="#" className="side-nav__link">
                        <svg className="side-nav__icon-home">
                            <use xlinkHref="img/sprite.svg#icon-home"></use>
                        </svg>
                        <span>Home</span>
                    </a>
                </Link>
                {/* {isSignedIn ? 
                <div className="side-nav__subscriptions">
                <span className="side-nav__divider" />
                    <span className="side-nav__divider__title">Subscriptions</span>
                    {renderSubs()}
                </div>
                : ""} */}
            </ul>
        </nav>
    );
};

export default Sidebar;

