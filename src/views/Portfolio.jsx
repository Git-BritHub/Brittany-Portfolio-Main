import React from 'react';
import Project from '../components/Projects/Project';

const projects = [
    {
        // TODO: Add Screenshots and URLs for websites
        title: 'masterBuilder',
        screenshot: '',
        url: '',
    },
    {
        title: 'Concert Groupie',
        screenshot: '',
        url: '',
    },
    {
        title: 'Project 3',
        screenshot: '',
        url: '',
    },
    // Add more projects
];

function Portfolio() {
    return (
        <div>
            <h2>Portfolio</h2>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </div>
    );
}

export default Portfolio