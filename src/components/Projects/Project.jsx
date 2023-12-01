import React from 'react';
import './style.css'

function Project({ title, screenshot, url }) {
    return (
        <div className='image-box'>
            <a href={url} target="_blank">
                <img src={screenshot} alt={title} />
                <div className='overlay'>
                <h3>{title}</h3>
            </div>
            </a>
        </div>
    );
}

export default Project;