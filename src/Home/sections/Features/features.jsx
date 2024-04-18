import styles from './feature.module.css'

import watchers from '../../../assets/watchers.webp'
import cell from '../../../assets/cell.webp'
import brain from '../../../assets/brain.webp'
import darwin1 from '../../../assets/darwin1.webp'
import evo1 from '../../../assets/evo1.webp'
import human1 from '../../../assets/human1.webp'
import sci from '../../../assets/sci.webp'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Features() {

    const tr1 = useRef(null)
    const tr2 = useRef(null)
    const tr3 = useRef(null)
    const tr4 = useRef(null)
    const tr5 = useRef(null)
    const tr6 = useRef(null)
    const tr7 = useRef(null)
    const text = useRef(null)
    const img1 = useRef(null)
    const img2 = useRef(null)
    const img3 = useRef(null)
    const img4 = useRef(null)
    const img5 = useRef(null)
    const img6 = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.fromTo(text.current, {
            opacity: 0,
            y: 100,
        }, {
            duration: 2,
            opacity: 1,
            y: 0,
            ease: 'bounce',
            scrollTrigger: {
                trigger: tr1.current,
                start: 'top 50%',
                end: 'bottom 50%',
                scrub: 1,
            }
        })

        tl.fromTo(img1.current, {
            opacity: 0,
            y: 100,
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: tr2.current,
                start: 'top 50%',
                end: 'bottom 50%',
                scrub: 1,
            }
        })

        tl.fromTo(img2.current, {
            opacity: 0,
            y: 100,
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: tr3.current,
                start: 'top 50%',
                end: 'bottom 50%',
                scrub: 1,
            }
        })

        tl.fromTo(img3.current, {
            opacity: 0,
            y: 100,
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: tr4.current,
                start: 'top 50%',
                end: 'bottom 50%',
                scrub: 1,
            }
        })

        tl.fromTo(img4.current, {
            opacity: 0,
            y: 100,
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: tr5.current,
                start: 'top 50%',
                end: 'bottom 50%',
                scrub: 1,
            }
        })

        tl.fromTo(img5.current, {
            opacity: 0,
            y: 100,
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: tr6.current,
                start: 'top 50%',
                end: 'bottom 50%',
                scrub: 1,
            }
        })

        tl.fromTo(img6.current, {
            opacity: 0,
            y: 100,
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: tr7.current,
                start: 'top 50%',
                end: 'bottom 50%',
                scrub: 1,
            }
        })

    })


    return (
        <div className={styles.feature}>
            <span ref={tr1}></span>
            <div className={styles.header}>
                <span className={styles.title}>
                    <h1>A WALK THROUGH</h1>
                    <h1 ref={text}>SPACE AND TIME</h1>
                </span>
                <p style={{ textTransform: "uppercase" }}>Curated Science Exhibition</p>
            </div>

            <img className={styles.watcher} src={watchers} alt="watchers" />
            <div className={styles.headerContent}>
                <p className={styles.p2}>
                    The curated science exhibition allows visitors to learn about the complexities
                    of human existence through artistically designed exhibits. The Science Expo
                    at Kozhikode narrates the story of Life, focusing on Human evolution in 6 chapters.
                </p>
                <img src={watchers} alt="watchers" />
            </div>

            <span ref={tr2}></span>
            <div className={styles.expo1}>
                <div className={styles.content}>
                    <h1>CELL</h1>
                    <p>Narrates the formation of the Complex cell, its functions, and its development into diverse life forms on Earth.</p>
                </div>
                <img ref={img1} src={cell} alt="cell" />
            </div>

            <span ref={tr3}></span>
            <div className={styles.expo2}>
                <img ref={img2} src={darwin1} alt="watchers" />
                <div className={styles.content}>
                    {/* <img src={darwin2} alt="watchers" /> */}
                    <h1>EVOLUTION</h1>
                    <p className={styles.p2}>
                        Evolution explains Charles Darwin's journey and findings in formulating the theory of Evolution by Natural selection.
                        This chapter depicts <b>life-size replicas of the evidence for the Evolutionary theory</b>.
                    </p>
                </div>
            </div>

            <span ref={tr4}></span>
            <div className={styles.expo3}>
                <img ref={img3} src={human1} alt="bone structure" />
                <div className={styles.headerContent}>
                    <h1 style={{ textTransform: 'uppercase', color: '#fff' }}>HUMAN</h1>
                    <p className={styles.p2}>
                        An artificially designed visual narration of the story of the Hominid
                        evolution beginning from 36 lakh years up to the spread of the Homo Sapiens around the globe.
                    </p>
                    <img ref={img3} src={human1} alt="bone structure" />
                </div>
            </div>

            <span ref={tr5}></span>
            <div className={styles.expo1}>
                <div className={styles.content}>
                    <h1>Hominid Time Travel</h1>
                    <p>
                        Reveals the anatomy and physiology of the Human
                        species through original exhibits and Audio visual presentations.
                    </p>
                </div>
                <img ref={img4} src={evo1} alt="evolution of monkey" />
            </div>

            <span ref={tr6}></span>
            <div className={styles.expo2}>
                <img ref={img5} src={brain} alt="brain" />
                <div className={styles.content}>
                    <h1>BRAIN</h1>
                    <p className={styles.p2}>
                        This chapter showcases exhibits explaining the role of the Human
                        Brain in enabling our species to master and control many things in nature.
                    </p>
                </div>
            </div>

            <span ref={tr7}></span>
            <div className={`${styles.expo3} ${styles.great}`}>
                <img ref={img6} src={sci} alt="bone structure" />
                <div className={styles.headerContent}>
                    <p className={styles.p2}>
                        Demonstrating the <br />
                        <b style={{ color: "#fff" }}>Philosophy of Science.</b>
                    </p>
                    <img ref={img6} className={styles.greatDudes} src={sci} alt="bone structure" />
                </div>
            </div>

            <div className={styles.lastContent}>
                <span>
                    <h1>walk ins .</h1>
                    <h1>simulated experiences .</h1>
                    <h1>multimedia installations .</h1>
                    <h1>augmented realities .</h1>
                    <h1>virtual realities .</h1>
                    <h1>life size replicas</h1>
                </span>

                <br /><br />

                <p>
                    Everyday Science The Expo provides the participation of
                    Citizen Science activities conducted outside the academic institutions.
                    A city-wide awareness of the sciences will be promoted by the placement
                    of evocative <b>street / Beach installations</b>. Book Fair Books on subjects
                    like science, art, and the humanities will be displayed by prominent publishers.
                    Industrial Pavilions Prominent scientific and technological organisations
                    are invited to present the advances made in their fields and to promote their
                    products and services.
                </p>
            </div>

        </div>
    )
}
