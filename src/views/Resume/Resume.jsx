import { Helmet } from 'react-helmet';
import resume from '../../assets/files/Brimley_Github_Resume.pdf';
import './style.css';

function Resume() {
    return (
        <div className='my-5 pt-3 pb-5 mx-3' style={{ height: '78vh' }}>
            <Helmet>
                <title>Brittany Brimley's Resume - Full Stack Web Developer Resume</title>
                <link rel="canonical" href="https://brittany-brimley-portfolio.netlify.app/Resume" />
                <meta name="description" content="View Brittany Brimley's resume to explore her full stack web development skills, experiences, and educational background. Download available." />
            </Helmet>
            <h1 className="mt-5 mb-3">RESUME</h1>
            <a href={resume} target='_blank' rel="noopener noreferrer" className='resumeUrl'>CLICK HERE FOR RESUME URL</a>
            <div className='container-fluid mt-4 d-flex justify-content-center align-items-center' style={{ height: '100%', width: '100%' }}>
                <iframe width="100%" height="100%" src={resume}></iframe>
            </div>
        </div>
    )
}

export default Resume;