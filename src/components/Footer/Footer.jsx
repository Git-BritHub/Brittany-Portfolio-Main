import React from 'react';
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa6';
import { useState } from "react"

export default function Footer() {

    const [linkIcon, pickLinkIcon] = useState(false)
    const [gitIcon, pickGitIcon] = useState(false)
    const [stackIcon, pickStackIcon] = useState(false)

    const stylesheet = {
        hover: {
            backgroundColor: 'violet',
            border: '2px solid yellow',
            color: 'aqua',
            // position: 'relative',
            // textTransform: 'none',
            // transform: 'none',
            // content: 'none',
            // textDecoration: 'none',
            // transition: 'none',
            // bottom: 'none',
        },
        after: {
            backgroundColor: 'black',
            border: '2px solid aqua',
            color: 'aqua',
            // position: 'relative',
            // textTransform: 'none',
            // transform: 'none',
            // content: 'none',
            // textDecoration: 'none',
            // transition: 'none',
            // bottom: 'none',
        },

    };

    return (
        <footer className='text-center text-white'>
            <div className='container p-3 pb-0'>
                <section className='mb-3'>
                    <a className='btn btn-outline-light btn floating m-1 rounded-circle'
                        href='https://www.linkedin.com/in/brittany-brimley-390a81293/' role='button'
                        style={{...linkIcon ? stylesheet.hover : stylesheet.after
                        }} onMouseEnter={() => {
                            pickLinkIcon(true)
                        }} onMouseLeave={() => {
                            pickLinkIcon(false)
                        }}><FaLinkedin />
                    </a>
                    <a className='btn btn-outline-light btn-floating m-1 rounded-circle'
                        href='https://github.com/Git-BritHub' role='button'
                        style={{...gitIcon ? stylesheet.hover : stylesheet.after
                        }} onMouseEnter={() => {
                            pickGitIcon(true)
                        }} onMouseLeave={() => {
                            pickGitIcon(false)
                        }}><FaGithub />
                    </a>
                    {/* Create and Add StackOverflow user url */}
                    <a className='btn btn-outline-light btn-floating m-1 rounded-circle'
                        href='https://stackoverflow.com/'
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