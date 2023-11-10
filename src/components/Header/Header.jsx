import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';

export default function Header() {
    const [currentView, setCurrentView] = useState(window.location.pathname.split('/')[1] || 'AboutMe');
    const handleViewChange = (view) => setCurrentView(view);

    return (
        <nav className='navbar navbar-expand-lg'>
            {/* <style>
                {`
                body,html {
                    margin: 0;
                    font: bold 14px/1.4 'Open Sans', arial, sans-serif;
                    background: #000;
                }

                ul { 
                  margin: 150px auto 0; 
                  padding: 0; 
                  list-style: none; 
                  display: table;
                  width: 600px;
                  text-align: center;
                }

                li { 
                  display: table-cell; 
                  position: relative; 
                  padding: 15px 0;
                }

                a {
                  color: #fff;
                  text-transform: uppercase;
                  text-decoration: none;
                  letter-spacing: 0.15em;     
                  display: inline-block;
                  padding: 15px 20px;
                  position: relative;
                }

                a:after {    
                  background: none repeat scroll 0 0 transparent;
                  bottom: 0;
                  content: "";
                  display: block;
                  height: 4px;
                  left: 50%;
                  position: absolute;
                  background: #fff;
                  transition: width 0.3s ease 0s, left 0.3s ease 0s;
                  width: 0;
                }
            
                a:hover:after { 
                  width: 100%; 
                  left: 0;
                  background-color: #00fffc;
                }

                @media screen and (max-height: 300px) {
                  ul {
                    margin-top: 40px;
                  }
                }
                `}
            </style> */}
            <div className='container-fluid'>
                <Link key={1} className={currentView === 'AboutMe' ? 'navbar-brand active' : 'navbar-brand'} onClick={() => handleViewChange('AboutMe')} to='/'>Brittany Brimley</Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <Navigation
                        links={[
                            <Link key={2} className={currentView === 'AboutMe' ? 'nav-link active' : 'nav-link'} to='/' onClick={() => handleViewChange('/')}>About Me</Link>,
                            <Link key={3} className={currentView === 'Portfolio' ? 'nav-link active' : 'nav-link'} to='/Portfolio' onClick={() => handleViewChange('Portfolio')}>Portfolio</Link>,
                            <Link key={4} className={currentView === 'ContactMe' ? 'nav-link active' : 'nav-link'} to='/ContactMe' onClick={() => handleViewChange('ContactMe')}>Contact Me</Link>,
                            <Link key={5} className={currentView === 'Resume' ? 'nav-link active' : 'nav-link'} to='/Resume' onClick={() => handleViewChange('Resume')}>Resume</Link>,
                        ]}
                    />
                </div>
            </div>
        </nav>
    );
}