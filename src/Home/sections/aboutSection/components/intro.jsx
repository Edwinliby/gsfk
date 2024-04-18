import styles from './intro.module.css'
import dotLeft from '../../../../assets/dotLeft.webp'
import dotRight from '../../../../assets/dotRight.webp'
import art from '../../../../assets/image 5.webp'
import boat from '../../../../assets/image 7.webp'
import earth from '../../../../assets/earth.webm'
import vr from '../../../../assets/vr.webp'
import sciexpo from '../../../../assets/sci-expo.webp'
import introTitle from '../../../../assets/into-title.webp' 

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Intro() {

    const tag = useRef(null)
    const tag2 = useRef(null)
    const mooon = useRef(null)
    const m1 = useRef(null)
    const m2 = useRef(null)
    const m3 = useRef(null)
    const m4 = useRef(null)
    const m5 = useRef(null)

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

        tl.fromTo(m4.current, {
            opacity: 0,
        }, {
            duration: 1,
            opacity: 1,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: tag.current,
                start: 'top 50%',
                end: 'bottom 50%',
                scrub: 1,
            }
        })

        tl.fromTo(m5.current, {
            opacity: 0,
        }, {
            duration: 1,
            opacity: 1,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: tag.current,
                start: 'top 50%',
                end: 'bottom 50%',
                scrub: 1,
            }
        })

        tl.fromTo(mooon.current, {
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
                <p className={styles.tagline}>
                    {/* <span className={styles.e}><b>Experience</b> <br /></span> */}
                    <div ref={tag} ></div>
                    {/* <span className={styles.ee}>An <b>Expanse</b> of <br /></span> */}
                    {/* <b>Knowledge</b><br /> */}
                    {/* <span className={styles.eee}> */}
                        {/* Through <b className={styles.art}>ART</b> */}
                    {/* </span> */}
                    {/* <img className={styles.sciexpo} src={sciexpo} alt="science-expo" /> */}
                    <img className={styles.sciexpo} src={introTitle} alt="introTitle" />
                </p>
                <img ref={m3} className={styles.boat} src={boat} alt="ref-img" />
            </div>

            <img ref={m1} className={styles.vr} src={vr} alt="ref-img" />
            <img ref={m4} className={styles.img1} src={dotLeft} alt="ref-img" />
            <img ref={m5} className={styles.img2} src={dotRight} alt="ref-img" />
            <img ref={m2} className={styles.img3} src={art} alt="ref-img" />
            <video ref={mooon} autoPlay muted loop playsInline className={styles.img4} src={earth}></video>
        </div>
    )
}