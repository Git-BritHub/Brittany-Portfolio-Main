import resume from '../../assets/files/Brimley_Github_Resume.pdf';
import './style.css';

function Resume() {
    return (
        <div className='mt-5 pt-3'>
            <h1 className="mt-5">RESUME</h1>
            <a href={resume} target='_blank' className='resumeUrl'>CLICK HERE FOR RESUME URL</a>
            <div className='border mt-3 mx-5'>
                <iframe width="100%" height="600" src={resume}></iframe>
            </div>
        </div>
    )
}

export default Resume;