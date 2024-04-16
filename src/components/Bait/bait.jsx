import { useState, useEffect } from 'react';
import styles from './bait.module.css';

export default function bait({ handleFormClick }) {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 250;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <p
            className={`
        ${styles.bait} 
        ${isScrolled ? styles.scrolled : ''}`}
            onClick={handleFormClick}>
        </p>
    )
}
