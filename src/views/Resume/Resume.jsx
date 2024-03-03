import resume from '../../assets/files/Brimley_Github_Resume.pdf';
import './style.css';

function Resume() {
    return (
        <div className='my-5 pt-3 pb-5 mx-3' style={{ height: '78vh' }}>
            <h1 className="mt-5 mb-3">RESUME</h1>
            <a href={resume} target='_blank' className='resumeUrl'>CLICK HERE FOR RESUME URL</a>
            <div className='container-fluid mt-4 d-flex justify-content-center align-items-center' style={{ height: '100%', width: '100%' }}>
                <iframe width="100%" height="100%" src={resume}></iframe>
            </div>
        </div>
    )
}

export default Resume;