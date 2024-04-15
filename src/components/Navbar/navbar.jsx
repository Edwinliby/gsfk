import React, { useRef, useEffect, useState } from 'react';
import styles from './navbar.module.css';
import logo from '../../assets/Logo.webp';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const formRef = useRef(null);
    const [formVisible, setFormVisible] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (formRef.current && !formRef.current.contains(event.target)) {
                setFormVisible(false);
            }
        }

        if (formVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [formVisible]);

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

    const handleBuyTicketClick = (e) => {
        e.stopPropagation(); // Prevent propagation of the click event
        setFormVisible(true);
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
                        <a href="/" className={styles.menuBuy} onClick={handleBuyTicketClick}>
                            Buy Ticket
                        </a>
                    </div>

                    <a href="/" className={styles.buy} onClick={handleBuyTicketClick}>
                        <b>Buy Ticket</b>
                    </a>
                </div>
            </div>

            {formVisible && (
                <div className={styles.form} >
                    <div ref={formRef}>
                        <form action="">
                            <div>
                                <h1>Registration Form</h1>
                                <p>Please fill in the form below to register for the event.</p>
                            </div>

                            <span>
                                <label htmlFor="name">Name*</label>
                                <input type="text" name='name' placeholder='Enter Your Name' />
                            </span>
                            <span>
                                <label htmlFor="email">Email*</label>
                                <input type="text" name='email' placeholder='Enter Your Email' />
                            </span>
                            <span>
                                <label htmlFor="phone">Phone no*</label>
                                <input type="text" name='phone' placeholder='Enter Your Phone no' />
                            </span>
                            <span className={styles.radio}>
                                <label htmlFor="below-18"><input type="radio" name="age" value="below-18" />Below 18</label>
                                <label htmlFor="above-18"> <input type="radio" name="age" value="above-18" />Above 18</label>
                            </span>
                            <button type="submit"><b>Submit</b></button>
                        </form>
                    </div>
                </div>
            )}
        </nav >
    );
}