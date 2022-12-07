import React, { Component } from "react";

const Header = ({titulo}) => {
    return(
        <nav className="navbar bg-primary">
            <div className="container">

                <h1 className="container text-center">{titulo}</h1>
            </div>
        </nav>
    )

}

export default Header;