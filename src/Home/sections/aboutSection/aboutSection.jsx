import styles from './about.module.css'

import dotLeft from '../../../assets/dotLeft.webp'
import dotRight from '../../../assets/dotRight.webp'
import art from '../../../assets/image 5.webp'
import boat from '../../../assets/image 7.webp'
import moon from '../../../assets/moon.webm'
import vr from '../../../assets/vr.webp'
import aboutTitle from '../../../assets/about-title.webp'
import events from '../../../assets/about.webp'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {

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
        <>
            <div className={styles.aboutSection} id='about'>
                <div ref={tag2} ></div>
                <div className={styles.tag}>
                    <p className={styles.tagline}>
                        DISCOVER THE <br />
                        <div ref={tag} ></div>
                        BEAUTY OF HUMAN <br />
                        CREATIVITY AT OUR <br />
                        <span>SCIENCE FESTIVAL</span>
                    </p>
                    <img ref={m3} className={styles.boat} src={boat} alt="ref-img" />
                </div>

                <img ref={m1} className={styles.vr} src={vr} alt="ref-img" />
                <img ref={m4} className={styles.img1} src={dotLeft} alt="ref-img" />
                <img ref={m5} className={styles.img2} src={dotRight} alt="ref-img" />
                <img ref={m2} className={styles.img3} src={art} alt="ref-img" />
                <video ref={mooon} autoPlay muted loop className={styles.img4} src={moon}></video>
            </div>

            <div className={styles.currentEvent}>
                <div className={styles.currentEventContent}>
                    <img className={styles.aboutEvent} src={aboutTitle} alt="about-event" />
                    <p>
                        Welcome to the <b>Science Expo at Kozhikode Beach</b>, a dynamic event running from May 10th to 16th, 2024.
                        Immerse yourself in a world of discovery with industrial pavilions, interactive science activities,
                        cultural showcases, and a captivating exhibition spotlighting life sciences. Drawing students and
                        the public from across northern Kerala, we anticipate over 2 lakh attendees throughout the 17-day
                        extravaganza. Come join us for a celebration of science and innovation against the stunning backdrop
                        of Kozhikode Beach!
                    </p>
                </div>
                <img src={events} alt="eventGallery" />
            </div>
        </>
    )
}