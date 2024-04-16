import styles from './collab.module.css'
import BG from '../../../assets/BGVideo.webm'

import s1 from '../../../assets/s1.webp'
import s2 from '../../../assets/s2.webp'
import s3 from '../../../assets/s3.webp'
import s4 from '../../../assets/s4.webp'
import s5 from '../../../assets/s5.webp'
import s6 from '../../../assets/s6.webp'

const partners = [
    { img: s1 },
    { img: s2 },
    { img: s3 },
    { img: s4 },
    { img: s5 },
    { img: s6 }
]

export default function CollabSection() {
    return (
        <div className={styles.collabSection} id='join'>
            <video autoPlay muted loop playsInline className={styles.video}>
                <source
                    src={BG}
                    type="video/webm"
                />
            </video>
            <div className={styles.Blur}></div>

            <div className={styles.title}>
                <h1>
                    JOIN, COLLABORATE & <br />
                    <span>CELEBRATE</span>
                </h1>
                <p>
                    SEK is a curated, one-of-a-kind experience open to collaboration, Partnerships and volunteering
                </p>
            </div>

            <div className={styles.partners}>
                <h1>OUR PARTNERS</h1>
                <div className={styles.partnerLogos}>
                    {partners.map((partner, index) => (
                        <img src={partner.img} alt={`partner${index}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}
