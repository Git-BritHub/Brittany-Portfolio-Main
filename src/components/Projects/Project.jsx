import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import './style.css';

function Project({ title, screenshot, url }) {
    return (
        <div className='image-box'>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <LazyLoadImage
                    alt={title}
                    src={screenshot}
                    effect="opacity"
                    width="100%"
                    height="100%"
                />
                <div className='overlay'>
                    <h3>{title}</h3>
                </div>
            </a>
        </div>
    );
}

export default Project;
