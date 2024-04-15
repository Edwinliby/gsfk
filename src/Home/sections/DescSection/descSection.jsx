import styles from './desc.module.css'
import dino from '../../../assets/Dino.webp'
import dotLeft from '../../../assets/dotLeft.webp'
import { FaLink } from "react-icons/fa";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Desc() {

    const start = useRef(null)
    const din = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.fromTo(din.current, {
            opacity: 0,
        }, {
            duration: 1,
            opacity: 1,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: start.current,
                start: 'top 50%',
                end: 'bottom 50%',
                scrub: 1,
            }
        })
    })

    return (
        <>
            <div ref={start}></div>
            <div className={styles.previous}>
                <img ref={din} className={styles.dino} src={dino} alt="" />
                <div className={styles.box}>
                    <a href="https://gsfk.org/" target='_blank'>
                        <span>
                            Previously At <br />
                            <h2 style={{ fontFamily: "Playfair Display", fontStyle: "italic" }}>GLOBAL SCIENCE FESTIVAL <FaLink size={25} /></h2>
                        </span>
                    </a>
                    <p>
                        The pursuit of science has shaped our modern world and brought hope, meaning, and empowerment.
                        The Science Expo Kozhikode celebrates this quest for knowledge by bringing together individuals
                        from diverse backgrounds to explore the beauty of science. This is conceived as a satellite
                        programme of the Global Science Festival of Kerala <a href="https://www.gsfk.org/" style={{ textDecoration: "none", color: "#fff" }} target='_blank'><b>(GSFK)</b> </a>
                        conducted in Thiruvananthapuram in January 2024 by Amuseum in association with the Science and Technology
                        Department, Govt. of Kerala and Kerala State Council for Science technology and Environment.
                        <br /> <br />
                        The success and public appreciation of this event have led to satellite science expos in different cities across the country.
                    </p>
                </div>
            </div>

            <div className={styles.eventContainer}>
                <div className={styles.event}>
                    <img className={styles.logos} src='https://www.gsfk.org/wp-content/uploads/2023/12/G-01.webp' alt='' />
                    <img className={styles.logos} src='https://www.gsfk.org/wp-content/uploads/2024/02/Visitors_07-02.jpeg' alt='' />
                    <img className={styles.logos} src='https://www.gsfk.org/wp-content/uploads/2024/02/visitors_10-2-scaled.jpeg' alt='' />
                    <img className={styles.logos} src='https://www.gsfk.org/wp-content/uploads/2024/02/visitors03-02_1.jpeg' alt='' />
                    <img className={styles.logos} src='https://www.gsfk.org/wp-content/uploads/2023/12/G-11.webp' alt='' />
                    <img className={styles.logos} src='https://english.janamtv.com/wp-content/uploads/2023/12/sa-1.jpg' alt='' />
                </div>
                <div className={styles.event}>
                    <img className={styles.logos} src='https://www.gsfk.org/wp-content/uploads/2023/12/G-01.webp' alt='' />
                    <img className={styles.logos} src='https://www.gsfk.org/wp-content/uploads/2024/02/Visitors_07-02.jpeg' alt='' />
                    <img className={styles.logos} src='https://www.gsfk.org/wp-content/uploads/2024/02/visitors_10-2-scaled.jpeg' alt='' />
                    <img className={styles.logos} src='https://www.gsfk.org/wp-content/uploads/2024/02/visitors03-02_1.jpeg' alt='' />
                    <img className={styles.logos} src='https://www.gsfk.org/wp-content/uploads/2023/12/G-11.webp' alt='' />
                    <img className={styles.logos} src='https://english.janamtv.com/wp-content/uploads/2023/12/sa-1.jpg' alt='' />
                </div>
            </div>

            <a className={styles.check} href='https://gsfk.org/' target='_blank'><FaLink />Check out the previous event</a>
        </>
    )
}
