import React from "react";

function Navbar(props) {
    return (
        <nav>
            <a href="/" >Home</a>
            <span> | </span>
            <a href="/about">About</a>
            <span> | </span>
            <a href="/API">API</a>
        </nav>
    )
}

export default Navbar;