import profilePic from '../../assets/images/profile_pic.png'
import './style.css';
const styles = {
    // TODO: Add inline CSS
};

function AboutMe() {
    const imagePath = profilePic;
    return (
        <div className='aboutMe justify-content-center align-items-center'>
            <img src={imagePath} alt='profile picture' 
                className='profilePic justify-content-center align-items-center mt-5 mb-5'>
            </img>
            <h2>FULL STACK WEB DEVELOPER</h2>
            <h3>JavaScript | CSS | HTML | Node.js | Express.js | Handlebars | MySQL | MERN | MongoDB | React </h3>
            <h3>Bootstrap | Tailwind | Bulma | Figma</h3>
        </div>
        // TODO: Add styling and formatting with react-bootstrap
        // TODO: Add profile pic
        // TODO: Add <p></p> tag for AboutMe content
    )
}

export default AboutMe;