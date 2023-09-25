import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="header-title d-flex flex-row justify-content-center m-2 border p-2">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">
                        Main
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        aria-current="page"
                        to="/products"
                    >
                        Products
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/login">
                        Login
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
