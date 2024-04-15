import styles from './hero.module.css'
import BG from '../../../assets/BGVideo.webm'
import Title from '../../../assets/Title.webp'

export default function heroSection() {
    return (
        <main className={styles.heroSection}>
            <video autoPlay muted loop playsInline className={styles.heroVideo}>
                <source
                    src={BG}
                    type="video/webm"
                />
            </video>
            <div className={styles.heroBlur}></div>

            <div className={styles.content}>
                <span className={styles.titleClick}>
                    <img className={styles.heroTitle} src={Title} alt="" />
                    <a href='https://makemypass.com/kozhikodexpo'>Buy Ticket</a>
                </span>

                <div className={styles.location}>
                    <div className={styles.date}>
                        <p>10<span className={styles.TH}>TH</span></p>
                        <b style={{ fontSize: "1rem" }}>to</b>
                        <p>26<span className={styles.TH}>TH</span></p>
                        may 2024
                    </div>
                    <p>Kozhikode Beach</p>
                </div>
            </div>
        </main>
    )
}
