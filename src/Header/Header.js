import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h2>
                <a href="#">
                    Star DB
                </a>
            </h2>
            <ul>
                <li>
                    <a href="#">People</a>
                </li>
                <li>
                    <a href="#">Planets</a>
                </li>
                <li>
                    <a href="#">Starships</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;