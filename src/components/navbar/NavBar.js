import React from 'react';
import Logo from '../../images/logo.png';

export default function NavBar() {
    return (
        <header className='navbar'>
            <div className='logo-wrapper'>
                <img src={Logo}></img>
            </div>
            <div className='links-wrapper'>
                <a href='#'>Accueil</a>
                <a href='#'>Profil</a>
                <a href='#'>Réglages</a>
                <a href='#'>Communauté</a>
            </div>
        </header>
    )
}
