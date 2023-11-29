import React from 'react';
import Project from '../components/Projects/Project';

const projects = [
    {
        // TODO: Add four more Project titles and all Screenshots and URLs for project websites
        title: 'masterBuilder',
        screenshot: '',
        url: 'https://master-builder-production-40c9.up.railway.app/',
    },
    {
        title: 'Concert Groupie',
        screenshot: '',
        url: 'https://github.com/Git-BritHub/concert-groupie',
    },
    {
        title: 'Novel Pursuit',
        screenshot: '',
        url: 'https://novel-pursuit-production.up.railway.app/',
    },
    {
        title: 'Scribe Master 3000',
        screenshot: '',
        url: 'https://scribe-master-3000-production.up.railway.app/',
    },
    {
        title: 'Micromanager Deluxe',
        screenshot: '',
        url: 'https://github.com/Git-BritHub/Micromanager-Deluxe.git',
    },
    {
        title: 'Destination Weather Dashboard',
        screenshot: '',
        url: 'https://git-brithub.github.io/Destination-Weather-Dashboard/',
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