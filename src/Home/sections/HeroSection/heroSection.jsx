import Countdown from 'react-countdown';
import styles from './hero.module.css'
import BG from '../../../assets/BGVideo.webm'
import Title from '../../../assets/Title.webp'

export default function heroSection() {

    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
            <div className={styles.counter}>
                <div><span>{days}</span> Days</div>:
                <div><span>{hours}</span> Hrs</div>:
                <div><span>{minutes}</span>min</div>:
                <div><span>{seconds}</span> sec</div>
            </div>
        )
    };

    return (
        <main className={styles.heroSection} id="home">
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
                    <a href="#">Tickets Closed</a>

                    <p style={{ color: "#fff", fontSize: "1.1rem" }}>***The event has been concluded</p>
                </span>
                <div className={styles.date_time}>
                    {/* <div className={styles.location}>
                        <Countdown
                            date={new Date("2024-05-10T00:00:00")}
                            renderer={renderer}
                        />
                    </div> */}
                    <div className={styles.location}>
                        <div className={styles.date}>
                            <p>10<span className={styles.TH}>TH</span></p>
                            <b style={{ fontSize: "1rem", color: "#fff" }}>to</b>
                            <p>26<span className={styles.TH}>TH</span></p>
                            may 2024
                        </div>
                        <h3>Kozhikode Beach</h3>
                    </div>
                </div>
            </div>
        </main>
    )
}
