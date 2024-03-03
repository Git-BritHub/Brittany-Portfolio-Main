import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import './style.css';

export default function Header() {
    const [currentView, setCurrentView] = useState(window.location.pathname.split('/')[1] || 'AboutMe');
    const handleViewChange = (view) => setCurrentView(view);

    return (
        <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid'>
                <Link key={1} className={currentView === 'AboutMe' ? 'navbar-brand active text-white' : 'navbar-brand text-white'} onClick={() => handleViewChange('AboutMe')} to='/'>Brittany Brimley</Link>
                <button
                    className='navbar-toggler custom-toggler'
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
                            <Link key={2} className={currentView === 'AboutMe' ? 'nav-link active text-white' : 'nav-link text-white'} to='/' onClick={() => handleViewChange('/')}>About Me</Link>,
                            <Link key={3} className={currentView === 'Portfolio' ? 'nav-link active text-white' : 'nav-link text-white'} to='/Portfolio' onClick={() => handleViewChange('Portfolio')}>Portfolio</Link>,
                            <Link key={4} className={currentView === 'ContactMe' ? 'nav-link active text-white' : 'nav-link text-white'} to='/ContactMe' onClick={() => handleViewChange('ContactMe')}>Contact Me</Link>,
                            <Link key={5} className={currentView === 'Resume' ? 'nav-link active text-white' : 'nav-link text-white'} to='/Resume' onClick={() => handleViewChange('Resume')}>Resume</Link>,
                        ]}
                    />
                </div>
            </div>
        </nav>
    );
}