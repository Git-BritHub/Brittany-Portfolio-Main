import './style.css'
import Project from '../../components/Projects/Project';
import ProjectCarousel from '../../components/Projects/ProjectCarousel';
import masterBuilder from '../../assets/images/masterBuilderScreenshot.png';
import theWeb from '../../assets/images/theWeb.png';
import concertGroupie from '../../assets/images/concertGroupie.png';
import novelPursuit from '../../assets/images/novelPursuit.png';
import scribeMaster from '../../assets/images/scribeMaster.png';
import workDayScheduler from '../../assets/images/workDayScheduler.png';

const projects = [
    {
        title: 'masterBuilder',
        screenshot: masterBuilder,
        url: 'https://master-builder-production-40c9.up.railway.app/',
    },
    {
        title: 'theWeb',
        screenshot: theWeb,
        url: 'https://theweb-production.up.railway.app/',
    },
    {
        title: 'Concert Groupie',
        screenshot: concertGroupie,
        url: 'https://shindekokoro.github.io/concert-groupie/',
    },
    {
        title: 'Scribe Master 3000',
        screenshot: scribeMaster,
        url: 'https://scribe-master-3000-production.up.railway.app/',
    },
    {
        title: 'Work Day Scheduler',
        screenshot: workDayScheduler,
        url: 'https://git-brithub.github.io/Company-Work-Day-Scheduler/',
    },
    {
        title: 'Novel Pursuit',
        screenshot: novelPursuit,
        url: 'https://novel-pursuit-production.up.railway.app/',
    },
];

function Portfolio () {
    return (
        <div className='portfolioProjects mt-5 pt-3'>
            <h2>PROJECTS</h2>
            <div className='projectCarousel pb-5'>
            <ProjectCarousel projects={projects} />
            </div>
            <div className='image-grid'>
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Portfolio