import styles from './about.module.css'

import dotLeft from '../../assets/dotLeft.webp'
import dotRight from '../../assets/dotRight.webp'
import art from '../../assets/image 5.webp'
import boat from '../../assets/image 7.webp'
import moon from '../../assets/moon.gif'

export default function AboutSection() {
    return (
        <div className={styles.aboutSection} id='about'>
            <div className={styles.tag}>
                <p className={styles.tagline}>
                    DISCOVER THE <br />
                    BEAUTY OF HUMAN <br />
                    CREATIVITY AT OUR <br />
                    <span>SCIENCE FESTIVAL</span>
                </p>
                <img className={styles.boat} src={boat} alt="" />
            </div>

            <img className={styles.img1} src={dotLeft} alt="" />
            <img className={styles.img2} src={dotRight} alt="" />
            <img className={styles.img3} src={art} alt="" />
            <img className={styles.img4} src={moon} alt="" />
        </div>
    )
}
