import { Helmet } from 'react-helmet';
import './style.css'
import Project from '../../components/Projects/Project';
import ProjectCarousel from '../../components/Projects/ProjectCarousel';
import masterBuilder from '../../assets/images/masterBuilderScreenshot.png';
import juddTeam from '../../assets/images/juddTeam.png';
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
        githubUrl: 'https://github.com/Git-BritHub/Master-Builder.git',
    },
    {
        title: 'The Judd Team',
        screenshot: juddTeam,
        url: 'https://mycahomesold.com/',
        githubUrl: 'https://github.com/Git-BritHub',
    },
    {
        title: 'theWeb',
        screenshot: theWeb,
        url: 'https://theweb-production.up.railway.app/',
        githubUrl: 'https://github.com/tmorgan-dev/theWeb.git',
    },
    {
        title: 'Concert Groupie',
        screenshot: concertGroupie,
        url: 'https://shindekokoro.github.io/concert-groupie/',
        githubUrl: 'https://github.com/shindekokoro/concert-groupie.git',
    },
    {
        title: 'Scribe Master 3000',
        screenshot: scribeMaster,
        url: 'https://scribe-master-3000-production.up.railway.app/',
        githubUrl: 'https://github.com/Git-BritHub/Scribe-Master-3000.git',
    },
    {
        title: 'Work Day Scheduler',
        screenshot: workDayScheduler,
        url: 'https://git-brithub.github.io/Company-Work-Day-Scheduler/',
        githubUrl: 'https://github.com/Git-BritHub/Company-Work-Day-Scheduler.git',
        },
    {
        title: 'Novel Pursuit',
        screenshot: novelPursuit,
        url: 'https://novel-pursuit-production.up.railway.app/',
        githubUrl: 'https://github.com/Git-BritHub/Novel-Pursuit.git',
    },
];

function Portfolio () {
    return (
        <div className='portfolioProjects mt-5 pt-3'>
            <Helmet>
                <title>Brittany Brimley's Projects - Full Stack Web Development Portfolio</title>
                <link rel="canonical" href="https://brittany-brimley-portfolio.netlify.app/Portfolio" />
                <meta name="description" content="Explore Brittany Brimley's Full Stack Web Development projects including real-world applications. View live sites and source codes." />
            </Helmet>
            <h1 className="mt-5">PROJECTS</h1>
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