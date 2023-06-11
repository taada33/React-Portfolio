import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";

function Header({handlePageChange, currentPage}) {

    const [hidden, setHidden] = useState(true)

    setTimeout(()=>{
        setHidden(!hidden)
    }, 1000)

    return (
        <header>
        <h1>
            Thomas Adamson
            {hidden && 
            (
                <span>
                    _
                </span>
            )
            }
        </h1>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    )
}

export default Header;