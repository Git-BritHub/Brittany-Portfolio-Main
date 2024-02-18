import profilePic from '../../assets/images/profile_pic.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import './style.css';

function AboutMe() {
    const imagePath = profilePic;
    return (
        <div className='aboutMe justify-content-center align-items-center'>
            <LazyLoadImage
                src={imagePath} 
                alt='profile picture' 
                className='profilePic justify-content-center align-items-center mt-5 mb-5'
                effect="opacity"
            />
            <h2>FULL STACK WEB DEVELOPER</h2>
            <h3>JavaScript | TypeScript | CSS | HTML | NodeJS | JSON | JQuery | ExpressJS | Handlebars | JWT | MySQL | MERN | MongoDB | GraphQL | Apollo </h3>
            <h3>React | NextJS | DaisyUI | Tailwind CSS | Bootstrap | Bulma | Figma | Netlify</h3>
            <p>Diligent software developer with a keen artistic eye, committed to delivering exceptional work with meticulous attention to detail. Highly self-motivated, driven by curiosity, and possess a deep passion for continuous learning in our dynamic and ever-evolving field. Proactively seeking opportunities to elevate my skills and efficiency. Excellent problem-solver with an innovative and strategic mindset. Excels in fostering positive and communicative team environments, contributing effectively. Simultaneously thrives in independent work settings and is committed to realizing a company's objectives with a focus on delivering impactful results.</p>
        </div>
        // TODO: Add Parallax feature
    )
}

export default AboutMe;