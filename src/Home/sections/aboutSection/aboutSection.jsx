import styles from './about.module.css'

import dotLeft from '../../../assets/dotLeft.webp'
import dotRight from '../../../assets/dotRight.webp'
import art from '../../../assets/image 5.webp'
import boat from '../../../assets/image 7.webp'
import earth from '../../../assets/earth.webm'
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
                <video ref={mooon} autoPlay muted loop className={styles.img4} src={earth}></video>
            </div>

            <div className={styles.currentEvent}>
                <div className={styles.currentEventContent}>
                    <img className={styles.aboutEvent} src={aboutTitle} alt="about-event" />
                    <p>
                        The Science Expo at Kozhikode Beach from <b>May 10th to 26th - 2024</b>, will explore a curated
                        exhibition focussing on ‘Life Sciences’, industrial pavilions showcasing science and technology,
                        everyday science activities, cultural programs, food festivals and street installations. The Science Expo
                        at Kozhikode will welcome students and the public and expects a footfall of over 2 lakh people over 17 days.
                        <br /><br />
                        Science Expo Kozhikode is organised by <b>Amuseum ArtScience</b>, Thiruvananthapuram in collaboration
                        with public and private institutions and Science organisations.
                    </p>
                </div>
                <img src={events} alt="eventGallery" />
            </div>

            <div className={styles.aimSection}>
                <img className={styles.dot} src={dotLeft} alt="" />
                <h1>AIM</h1>
                <ul>
                    <li>
                        Foster the community as a knowledge society, promote scientific reasoning and propagate science's philosophy, methodology and objectivity.
                    </li>
                    <li>
                        Create a platform for scientists, scholars, and the public to interact with each other and recontextualise science as a way of life.
                    </li>
                    <li>
                        Celebrate the fusion of science and art with an interdisciplinary approach to better science communication.
                    </li>
                </ul>
            </div>

            <div className={styles.whyExpo}>
                <span className={styles.whyExpoTitle}>
                    <h1 style={{ paddingBottom: ".5rem" }}>How does Science Expo Spreads Science?</h1>
                    <b>Through a union of a union Science & Art</b>
                </span>
                <br />
                <p>
                    Amuseum Science Expo is an interdisciplinary and international approach to recognise, explore and
                    experience Science through the collaboration of Artists, Scientists, Designers, Architects, Musicians
                    and more. To ensure the nature of science is conveyed at a grassroots level, Science Expo has outreach
                    programmes, satellite events and various exciting campaigns that will occur throughout the country.
                </p>
                <br />
                <h1>Why Amuseum Science Expo</h1>
                <p>
                    There is something in this world that has touched the lives of everyone and has forever
                    changed their lives. It has shaped humanity and fundamentally affected how we interact with the world around us.
                    For something that has given so much to the world, <b>Science is often forgotten</b>.
                    <br /><br />
                    We at Amuseum Science Expo seek to change that by highlighting the strengths, beauty and limitations of Science.
                </p>
                <div className={styles.whyExpoQA}>
                    <div className={styles.starContainer}>
                        <video className={styles.star} autoPlay muted loop src={moon}></video>
                        <h4>The Moon</h4>
                    </div>

                    <div className={styles.QAList}>
                        <span>
                            <h1>What?</h1>
                            <p>
                                The Science Expo is an Exhibition of Science, Technology, Engineering, Art and Mathematics (STEAM).
                                This edition focuses on the 'Life Sciences'. The expo will also include industrial pavilions, cultural
                                programmes, food festival, book exhibition and many more.
                            </p>
                        </span>
                        <span>
                            <h1>Why?</h1>
                            <p>
                                To foster a culture of appreciating science and to examine its strengths and weaknesses.
                            </p>
                        </span>
                        <span>
                            <h1>For?</h1>
                            <p>
                                Festival Attendees, Science Enthusiasts, Scientists, Students and Art lovers.
                            </p>
                        </span>
                        <span>
                            <h1>Where?</h1>
                            <p>
                                Science Expo is planned at the <a href="https://maps.app.goo.gl/iFQURcetJMQVaknDA"><b>Kozhikode Beach</b></a>. <br />
                                Expo area 30000 sq feet A/C roofed area
                            </p>
                        </span>
                        <span>
                            <h1>When?</h1>
                            <p>
                                The Science Expo at Kozhikode is planned to be from <b>10 May 2024 to 26 May 2024</b> <br />
                                Expo timings <b>11. 00 AM - 11. 00 PM</b> <br /><br />
                                Admission The visitors will be regulate through tickets.
                            </p>
                        </span>
                        <span>
                            <h1>
                                How?
                            </h1>
                            <p>
                                Bookings Open Now at <a href="https://amuseum.org.in/" target='_blank'>www.amuseum.org.in</a>
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}