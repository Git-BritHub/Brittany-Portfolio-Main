import profilePic from '../../assets/images/profile_pic.png'
import './style.css';

// const styles = {
// };

function AboutMe() {
    const imagePath = profilePic;
    return (
        <div className='aboutMe justify-content-center align-items-center'>
            <img src={imagePath} alt='profile picture' 
                className='profilePic justify-content-center align-items-center mt-5 mb-5'>
            </img>
            <h2>FULL STACK WEB DEVELOPER</h2>
            <h3>JavaScript | CSS | HTML | NodeJS | JSON | JQuery | ExpressJS | Handlebars | MySQL | MERN | MongoDB | GraphQL | ReactJS </h3>
            <h3>NextJS | Tailwind | Bootstrap | Bulma | Figma</h3>
            <p>Hardworking software developer who gives great attention to detail while taking pride and care in the work that I do. Incredibly self-motivated with a curious mind and great love of learning. Constantly looking for ways to enhance my skills, efficiency and knowledge of our ever-changing and evolving field. Charismatic with excellent communication skills who excels in a team environment, as well as individually. Prioritizes and strives to meet a company’s goals and further its success.  </p>
        </div>
        // TODO: Add Parallax feature
    )
}

export default AboutMe;