import React from "react";
import Project from "../Project"

import blog from '../../images/blog.gif'
import flowers from '../../images/flowers.gif'
import js from '../../images/js.gif'
import rain from '../../images/rain.gif'
import popcorn from '../../images/popcorn.gif'
import database from '../../images/database.gif'

const projects = [
    {
        name:'Flower Emporium',
        github: 'https://github.com/taada33/The-Flower-Emporium',
        deploy: 'https://flower-emporium.herokuapp.com/',
        src: flowers,
        srcAlt: 'E-commerce website employing SQL DB',
    },
    {
        name:'Tech Blog',
        github: 'https://github.com/taada33/Tech-Blog',
        deploy: 'https://tech-blog-ta.herokuapp.com/',
        src: blog,
        srcAlt: 'Blog where users can make posts and comments',
    },
    {
        name:'Text Editor',
        github: 'https://github.com/taada33/Text-Editor',
        deploy: 'https://text-editor-ta.herokuapp.com/',
        src: js,
        srcAlt: 'JS sensitive text editor with PWA capabilities',
    },
    {
        name:'Weather Dashboard',
        github: 'https://github.com/taada33/Weather-Dashboard',
        deploy: 'https://taada33.github.io/Weather-Dashboard/',
        src: rain,
        srcAlt: 'forecast/weather data via API requests',
    },
    {
        name:'Movie Finder',
        github: 'https://github.com/taada33/Movie-Selector',
        deploy: 'https://taada33.github.io/Movie-Selector/',
        src: popcorn,
        srcAlt: 'Find movie trailers and reviews',
    },
    {
        name:'Social Network API',
        github: 'https://github.com/taada33/Social-Network-API',
        src: database,
        srcAlt: 'Backend of a Social Network Application',
    },
]

export default function Portfolio() {
    return (
        projects.map((project, index) => {
            return (
                <Project project={project} key={index}/>
            ) 
        })
    )
}
