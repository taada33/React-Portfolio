import React, {useState} from "react";
import githubText from "../images/github-text.png"
import deployment from '../images/deployment-icon.png'


function Project(project) {
    const {name, deploy, github, src, srcAlt} = project.project
    console.log(src)
    const [hidden, setHidden] = useState(false);
    return (
        <div className="img-container"
            onMouseEnter={() => {
                setHidden(true)
            }}
            onMouseLeave={() => {
                setHidden(false)
            }}>
                <img src={src} className="project-img" alt={srcAlt}/>
                {hidden && (
                    <div className="img-mouseOver">
                    <h3 className="title">{name}</h3>
                    <a className="project-github" href={github}> <img className="github-text" src={githubText} /> </a>
                    {deploy && (<a className="link" href={deploy}> <img className="deployment" src={deployment} /> </a>)}
                    </div>
                )}
        </div>
    )
}

export default Project;