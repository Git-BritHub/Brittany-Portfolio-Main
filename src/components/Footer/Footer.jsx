import React from 'react';
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa6';
import { useState } from "react";
import './style.css';

export default function Footer() {

    const [linkIcon, pickLinkIcon] = useState(false)
    const [gitIcon, pickGitIcon] = useState(false)
    const [stackIcon, pickStackIcon] = useState(false)

    const stylesheet = {
        hover: {
            backgroundColor: 'purple',
            border: '2px solid aqua',
            color: 'aqua',
            font: 'bold',
        },
        after: {
            backgroundColor: 'black',
            border: '2px solid white',
            color: 'aqua',
            font: 'bold',
        },
    };

    return (
        <footer className='text-center text-white bg-black'>
            <div className='container px-3'>
                <section className='my-2'>
                    <a className='btn btn-outline-light btn floating m-1 rounded-circle'
                        href='https://www.linkedin.com/in/brittany-brimley-390a81293/' target='_blank 'role='button'
                        style={{...linkIcon ? stylesheet.hover : stylesheet.after
                        }} onMouseEnter={() => {
                            pickLinkIcon(true)
                        }} onMouseLeave={() => {
                            pickLinkIcon(false)
                        }}><FaLinkedin />
                    </a>
                    <a className='btn btn-outline-light btn-floating m-1 rounded-circle'
                        href='https://github.com/Git-BritHub' target='_blank' role='button'
                        style={{...gitIcon ? stylesheet.hover : stylesheet.after
                        }} onMouseEnter={() => {
                            pickGitIcon(true)
                        }} onMouseLeave={() => {
                            pickGitIcon(false)
                        }}><FaGithub />
                    </a>
                    {/* Create and Add StackOverflow user url */}
                    <a className='btn btn-outline-light btn-floating m-1 rounded-circle'
                        href='https://stackoverflow.com/' target='_blank' role='button'
                        style={{...stackIcon ? stylesheet.hover : stylesheet.after
                        }} onMouseEnter={() => {
                            pickStackIcon(true)
                        }} onMouseLeave={() => {
                            pickStackIcon(false)
                        }}><FaStackOverflow />
                    </a>
                </section>
            </div>
        </footer>
    )
}