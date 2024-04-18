import styles from './intro.module.css'
import art from '../../../../assets/image 5.webp'
import Earth from '../../../../assets/earth.webm'
import vr from '../../../../assets/vr.webp'
import introTitle from '../../../../assets/into-title.webp'
import c1 from '../../../../assets/c1.webp'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Intro() {

    const tag = useRef(null)
    const tag2 = useRef(null)
    const earth = useRef(null)
    const m1 = useRef(null)
    const m2 = useRef(null)
    const m3 = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.fromTo(m1.current, {
            opacity: 0,
            x: -100,
        }, {
            duration: 1,
            opacity: 1,
            x: 0,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: tag.current,
                start: 'top 50%',
                end: 'bottom 50%',
                scrub: 1,
            }
        })

        tl.fromTo(m2.current, {
            opacity: 0,
            y: 100,
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: tag.current,
                start: 'top 50%',
                end: 'bottom 50%',
                scrub: 1,
            }
        })

        tl.fromTo(m3.current, {
            opacity: 0,
            x: 100,
        }, {
            duration: 1,
            opacity: 1,
            x: 0,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: tag.current,
                start: 'top 50%',
                end: 'bottom 50%',
                scrub: 1,
            }
        })

        tl.fromTo(earth.current, {
            scale: 0,
        }, {
            duration: 1,
            scale: 1,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: tag2.current,
                start: 'top 50%',
                end: 'bottom 50%',
                scrub: 1,
            }
        })
    })

    return (
        <div className={styles.aboutSection}>
            <div ref={tag2} ></div>
            <div className={styles.tag}>
                <div className={styles.tagline}>
                    <div ref={tag} ></div>
                    <img className={styles.sciexpo} src={introTitle} alt="introTitle" />
                </div>
                {/* <img ref={m3} className={styles.boat} src={c1} alt="ref-img" /> */}
            </div>

            <img ref={m1} className={styles.vr} src={vr} alt="ref-img" />
            <img ref={m2} className={styles.img3} src={art} alt="ref-img" />
            <img ref={m3} className={styles.boat} src={c1} alt="ref-img" />
            <video ref={earth} autoPlay muted loop playsInline className={styles.earth} src={Earth}></video>
        </div>
    )
}