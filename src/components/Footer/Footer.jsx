import React from 'react';
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className='text-center text-white'>
            <div className='container p-3 pb-0'>
                <section className='mb-3'>
                    <a className='btn btn-outline-light btn floating m-1' href='https://www.linkedin.com/in/brittany-brimley-390a81293/' role='button' icon={FaLinkedin}>
                    </a>
                    <a className='btn btn-outline-light btn-floating m-1' href='https://github.com/Git-BritHub' role='button' icon={FaGithub}>
                    </a>
                    {/* Create and Add StackOverflow user url */}
                    <a className='btn btn-outline-light btn-floating m-1' href='https://stackoverflow.com/' icon={FaStackOverflow}></a>
                </section>
            </div>
        </footer>
    )
}