import React from "react";

function Navigation({currentPage, handlePageChange}) {
    return (
        <ul>
            <li>
                <a 
                href="#about"
                onClick={() => handlePageChange('About')}>
                    About Me
                </a>
            </li>
            <li>
                <a 
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}>
                    Portfolio
                </a>
            </li>
            <li>
                <a 
                href="#contact"
                onClick={() => handlePageChange('Contact')}>
                    Contact Me
                </a>
            </li>
            <li>
                <a 
                href="#Resume"
                onClick={() => handlePageChange('Resume')}>
                    Resume
                </a>
            </li>
        </ul>
    )
}

export default Navigation;