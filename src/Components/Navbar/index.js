import React from 'react';
import { Link } from "react-router-dom";

import classes from "./Nav.module.css";

function Navbar() {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    id="ic_person_24px"
                                    d="M12,12A4,4,0,1,0,8,8,4,4,0,0,0,12,12Zm0,2c-2.67,0-8,1.34-8,4v2H20V18C20,15.34,14.67,14,12,14Z"
                                    transform="translate(-4 -4)"
                                />
                            </svg>
                            Log out
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
