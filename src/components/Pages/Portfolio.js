import React from "react";
import Project from "../Project"

const projects = [
    {
        name:'Flower Emporium',
        github: 'https://github.com/taada33/The-Flower-Emporium',
        deploy: 'https://flower-emporium.herokuapp.com/',
        src: '../flowers.gif',
        srcAlt: 'E-commerce website employing SQL DB',
    },
    {
        name:'Tech Blog',
        github: 'https://github.com/taada33/Tech-Blog',
        deploy: 'https://tech-blog-ta.herokuapp.com/',
        src: '../blog.gif',
        srcAlt: 'Blog where users can make posts and comments',
    },
    {
        name:'Text Editor',
        github: 'https://github.com/taada33/Text-Editor',
        deploy: 'https://text-editor-ta.herokuapp.com/',
        src: '../js.gif',
        srcAlt: 'JS sensitive text editor with PWA capabilities',
    },
    {
        name:'Weather Dashboard',
        github: 'https://github.com/taada33/Weather-Dashboard',
        deploy: 'https://taada33.github.io/Weather-Dashboard/',
        src: '../rain.gif',
        srcAlt: 'forecast/weather data via API requests',
    },
    
]

export default function Portfolio() {
    return (
        projects.map((project, index) => {
            return <Project project={project} key={index}/>
        })
    )
}
