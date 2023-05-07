import React from "react";
import Navigation from "./Navigation";

function Header({handlePageChange, currentPage}) {
    return (
        <header>
        <h1>
            Thomas Adamson
        </h1>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    )
}

export default Header;