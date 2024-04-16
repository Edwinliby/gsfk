import React, { useRef, useEffect, useState } from 'react';
import styles from './navbar.module.css';
import logo from '../../assets/Logo.webp';
import Form from '../Form/form';

export default function Navbar() {

    const [setPopup, setSetPopup] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 150;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={styles.nav}>

            <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isMobileMenuOpen ? styles.open : ''}`}>

                <div className={`${styles.menuIcon} ${isMobileMenuOpen ? styles.open : ''}`} onClick={handleMobileMenuToggle}>
                    <div className={styles.bar} />
                    <div className={styles.bar} />
                    <div className={styles.bar} />
                </div>

                <a href="/">
                    <img className={styles.logo} src={logo} alt='gsfk-logo' />
                </a>

                <div className={`${styles.links} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <a href="/">
                        <img className={styles.logoo} src={logo} alt='gsfk-logo' />
                    </a>

                    <div className={styles.linkBlocks}>
                        <a href={window.location.pathname === '/team' ? '/#about' : '#about'}>
                            About
                        </a>
                        <a href="#join" >
                            Partners
                        </a>
                        <a href="/team" >
                            Team
                        </a>
                        <a href="/" className={styles.menuBuy} onClick={() => { setSetPopup(prevState => !prevState) }}>
                            Buy Ticket
                        </a>
                    </div>

                    <a href="/" className={styles.buy} onClick={() => { setSetPopup(prevState => !prevState) }}>
                        <b>Buy Ticket</b>
                    </a>
                </div>
            </div>
            {setPopup ? <Form /> : null}
        </nav >
    );
}