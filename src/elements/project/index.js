import React from 'react'
import './project.css'
const Project = ({title, desc, img, projectLink, projectLinkName}) => {
    return (
        <div className='project'>
            <div className='projectActual'>
                <div className='txt'>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    <p><b>Project Link:</b> <a href={projectLink} target='_blank'>{projectLinkName}</a></p>
                </div>
                <div className='image'>
                    <img src={img} />
                </div>
            </div>
        </div>
    )
}

export default Project