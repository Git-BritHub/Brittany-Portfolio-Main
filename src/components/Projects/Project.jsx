import React from 'react';

function Project({ title, screenshot, url }) {
    return (
        <div>
            <a href={url} target="_blank">
                <img src={screenshot} alt={title} />
                <h3>{title}</h3>
            </a>
        </div>
    );
}

export default Project;