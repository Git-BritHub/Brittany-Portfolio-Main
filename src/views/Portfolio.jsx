import React from 'react';
import Project from '../components/Projects/Project';

const projects = [
    {
        // TODO: Add four more Project titles and all Screenshots and URLs for project websites
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
    {
        title: 'Project 4',
        screenshot: '',
        url: '',
    },
    {
        title: 'Project 5',
        screenshot: '',
        url: '',
    },
    {
        title: 'Project 6',
        screenshot: '',
        url: '',
    },
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