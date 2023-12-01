import React from 'react';
import './style.css'

function Project({ title, screenshot, url }) {
    return (
        <div className='image-grid'>
            <a href={url} target="_blank">
                <img src={screenshot} alt={title} className='image-box'/>
                <h3>{title}</h3>
            </a>
        </div>
    );
}

export default Project;