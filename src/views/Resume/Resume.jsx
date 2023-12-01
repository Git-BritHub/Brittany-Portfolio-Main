import resume from '../../assets/files/Brimley_Resume.pdf';
const styles = {
    // TODO: Add inline CSS
};

function Resume() {
    return (
        <div className='mt-5 pt-3'>
            <h1>RESUME</h1>
            <a href={resume} target='_blank'>RESUME URL</a>
            <div className='mt-3'>
                <iframe width="100%" height="600" src={resume}></iframe>
            </div>
        </div>
        // TODO: Add styling and formatting with react-bootstrap
    )
}

export default Resume;