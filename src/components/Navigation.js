import React, { useEffect } from "react";

function Navigation({currentPage, handlePageChange}) {

    const styles = {
        anchorStyle: {
            textDecoration: 'underline',
            textDecorationLine: 'underline',
        }
    }

    useEffect(() => {
        const anchors = document.querySelectorAll('a');
        // console.log(currentPage)
        anchors.forEach((anchor) => {
            if(anchor.href.split('#').pop() === currentPage){
                console.log("hello")
                //increase font size
                anchor.style = "text-decoration:underline"

            }
            else{
                anchor.style = "text-decoration:none"
            }
            // console.log(anchor.href.split('#').pop())
        })
    }, [currentPage])
    return (
        <ul>
            <li>
                <a 
                href="#About"
                onClick={() => handlePageChange('About')}>
                    About Me
                </a>
            </li>
            <li>
                <a 
                href="#Portfolio"
                onClick={() => handlePageChange('Portfolio')}>
                    Portfolio
                </a>
            </li>
            <li>
                <a 
                href="#Contact"
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