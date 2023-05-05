import React from "react";
import Navigation from "./Navigation";

function Header({handlePageChange}) {
    return (
        <header>
        <h1>
            Thomas Adamson
        </h1>
        <Navigation handlePageChange={handlePageChange}/>
        </header>
    )
}

export default Header;