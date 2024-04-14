import { useState, useEffect } from 'react';
import styles from './navbar.module.css'
import logo from '../../assets/Logo.webp'

export default function Navbar() {
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

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={styles.nav}>

            <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>

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
                        <a href={window.location.pathname === '/team' ? '/#about' : '#about'} onClick={closeMobileMenu}>
                            About
                        </a>
                        <a href="#join" onClick={closeMobileMenu}>
                            Join Us
                        </a>
                        <a href="/team" onClick={closeMobileMenu}>
                            Team
                        </a>
                        <a href="/" onClick={closeMobileMenu}>
                            Ticketing
                        </a>
                    </div>
                </div>

            </div>

        </nav>
    );
}