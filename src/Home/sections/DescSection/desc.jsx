import styles from './desc.module.css'
import { FaLink } from "react-icons/fa";

export default function Desc() {
    return (
        <>
            <div className={styles.eventContainer}>
                <div className={styles.event}>
                    <img className={styles.logos} src='https://www.gsfk.org/wp-content/uploads/2023/12/G-01.webp' alt='' />
                    <img className={styles.logos} src='https://www.gsfk.org/wp-content/uploads/2024/02/Visitors_07-02.jpeg' alt='' />
                    <img className={styles.logos} src='https://www.gsfk.org/wp-content/uploads/2024/02/visitors_10-2-scaled.jpeg' alt='' />
                    <img className={styles.logos} src='https://www.gsfk.org/wp-content/uploads/2024/02/visitors03-02_1.jpeg' alt='' />
                    <img className={styles.logos} src='https://www.gsfk.org/wp-content/uploads/2023/12/G-11.webp' alt='' />
                    <img className={styles.logos} src='https://english.janamtv.com/wp-content/uploads/2023/12/sa-1.jpg' alt='' />
                </div>
                <div className={styles.event}>
                    <img className={styles.logos} src='https://www.gsfk.org/wp-content/uploads/2023/12/G-01.webp' alt='' />
                    <img className={styles.logos} src='https://www.gsfk.org/wp-content/uploads/2024/02/Visitors_07-02.jpeg' alt='' />
                    <img className={styles.logos} src='https://www.gsfk.org/wp-content/uploads/2024/02/visitors_10-2-scaled.jpeg' alt='' />
                    <img className={styles.logos} src='https://www.gsfk.org/wp-content/uploads/2024/02/visitors03-02_1.jpeg' alt='' />
                    <img className={styles.logos} src='https://www.gsfk.org/wp-content/uploads/2023/12/G-11.webp' alt='' />
                    <img className={styles.logos} src='https://english.janamtv.com/wp-content/uploads/2023/12/sa-1.jpg' alt='' />
                </div>
            </div>

            <a className={styles.check} href='https://gsfk.org/' target='_blank'><FaLink />Check out the previous event</a>
        </>
    )
}