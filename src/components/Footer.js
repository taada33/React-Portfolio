import React from "react";
import linkedIn from "../images/LinkedIn_logo.png"
import github from "../images/GitHub-logo.png"
import stackOverflow from "../images/stackoverflow-logo.png"


function Footer() {
    return (
        <footer>
            
            <a href="https://www.linkedin.com/in/taada33/"><img className="linkedIn" src={linkedIn}/></a>
            <a href="https://github.com/taada33"><img className="github" src={github} /></a>
            <a href="https://stackoverflow.com/users/22039040/taada"> <img className="stackOverflow" src={stackOverflow} /> </a>
        </footer>
    )
}

export default Footer;