import resume from '../../assets/files/Brimley_Resume.pdf';
const styles = {
    // TODO: Add inline CSS
};

function Resume() {
    return (
        <div className=''>
            <h1>Resume</h1>
            <a href={resume} target='_blank'>URL for Resume</a>
            <div className=''>
                <iframe width="100%" height="600" src={resume}></iframe>
            </div>
        </div>
        // TODO: Add styling and formatting with react-bootstrap
    )
}

export default Resume;