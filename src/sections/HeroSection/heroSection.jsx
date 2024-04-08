import styles from './hero.module.css'
import BG from '../../assets/bg~1.webm'
import Title from '../../assets/Title.webp'

export default function heroSection() {
    return (
        <main className={styles.heroSection}>
            <video autoplay loop className={styles.heroVideo}>
                <source
                    src={BG}
                    type="video/webm"
                />
            </video>
            <div className={styles.heroBlur}></div>

            <div className={styles.content}>
                <img className={styles.heroTitle} src={Title} alt="" />

                <div className={styles.location}>
                    <div className={styles.date}>
                        <p>10<span className={styles.TH}>TH</span></p>
                        <b style={{ fontSize: "1rem" }}>to</b>
                        <p>16<span className={styles.TH}>TH</span></p>
                        may 2024
                    </div>
                    <p>Kozhikode Beach</p>
                </div>
            </div>
        </main>
    )
}
