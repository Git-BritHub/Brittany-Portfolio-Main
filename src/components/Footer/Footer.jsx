import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';
import './style.css';

export default function Footer() {
    return (
        <footer className='text-center text-white bg-black w-100'>
            <div className='container-fluid px-3'>
                <section className='footer my-2'>
                    {/* LinkedIn */}
                    <a className='btn btn-outline-light btn-floating m-1 rounded-circle'
                        href='https://www.linkedin.com/in/brittany-brimley-390a81293/' target='_blank'
                        rel='noopener noreferrer' aria-label='Visit my LinkedIn profile'>
                        <FaLinkedin />
                    </a>

                    {/* GitHub */}
                    <a className='btn btn-outline-light btn-floating m-1 rounded-circle'
                        href='https://github.com/Git-BritHub' target='_blank' 
                        rel='noopener noreferrer' aria-label='Visit my GitHub profile'>
                        <FaGithub />
                    </a>

                    {/* Stack Overflow */}
                    <a className='btn btn-outline-light btn-floating m-1 rounded-circle'
                        href='https://stackoverflow.com/' target='_blank'
                        rel='noopener noreferrer' aria-label='Visit my Stack Overflow profile'>
                        <FaStackOverflow />
                    </a>
                </section>
            </div>
        </footer>
    );
}