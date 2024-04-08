import styles from './desc.module.css'
import dino from '../../assets/Dino.webp'
import dotLeft from '../../assets/dotLeft.webp'

export default function Desc() {
    return (
        <>
            <div className={styles.previous}>
                <img className={styles.dino} src={dino} alt="" />
                <div className={styles.box}>
                    <span>
                        Previously At <br />
                        <h2 style={{ fontFamily: "Playfair Display", fontStyle: "italic" }}>GLOBAL SCIENCE FESTIVAL</h2>
                    </span>
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
        </>
    )
}
