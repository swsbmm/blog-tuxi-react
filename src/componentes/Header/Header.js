/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import './header.css';

const Header = () => {
    return(
        <div>
            <header>
            <section className="header-icons-conteiner">
            <div className="icons">
                <a href="/"><span className="fimanager flaticon-001-facebook"> </span></a>
                <a href="/"><span className="fimanager flaticon-002-twitter"> </span></a>
                <a href="/"><span className="fimanager flaticon-011-instagram"> </span></a>
                <a href="/"><span className="fimanager flaticon-008-youtube"> </span></a>
                <a href="/"><span className="fimanager flaticon-003-whatsapp"> </span></a>
            </div>
            <nav>
                <section className="nav-logo-conteiner">
                    <Link to="/"><img src={logo} alt=""/></Link>
                </section >
                <section className="profile-link">
                    <Link to="/contacto">CONTACTO</Link>
                    <Link to="/blogs">BLOGS</Link>
                </section>
            </nav>
            </section>
            </header>
        </div>
    )
}

export default Header;