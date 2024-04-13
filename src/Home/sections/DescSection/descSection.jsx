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
                            <h2 style={{ fontFamily: "Playfair Display", fontStyle: "italic" }}>GLOBAL SCIENCE FESTIVAL <FaLink /></h2>
                        </span>
                    </a>
                    <p>
                        The pursuit of science has shaped our modern world and
                        brought hope, meaning, and empowerment. The Global
                        Science Festival of Kerala (GSFK) celebrates this quest for
                        knowledge by bringing together individuals from diverse
                        backgrounds to explore the beauty of science. The first
                        edition of GSFK was conducted in Thiruvananthapuram in
                        January 2024, and it was attended by around 1.5 lakhs of
                        visitors. The success and public appreciation of this event
                        have led to satellite science expos in different cities across
                        the country.
                    </p>
                </div>
            </div>

            <div className={styles.aimSection}>
                <img className={styles.dot} src={dotLeft} alt="" />
                <h1>AIM</h1>
                <ul>
                    <li>
                        Foster the  community as a knowledge society, promote scientific reasoning and propagate science's philosophy, methodology and objectivity.
                    </li>
                    <li>
                        Create a platform for scientists, scholars and the public to interact with each other and recontextualize science as a way of life.
                    </li>
                    <li>
                        Celebrate the fusion of science and art with an interdisciplinary approach to better science communication.
                    </li>
                </ul>
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
