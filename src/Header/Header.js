import React from "react";
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <h2>
                <NavLink to="/">
                    Star DB
                </NavLink>
            </h2>
            <ul>
                <li>
                    <NavLink to="/people">People</NavLink>
                </li>
                <li>
                    <NavLink to="/planets">Planets</NavLink>
                </li>
                <li>
                    <NavLink to="/starships">Starships</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;