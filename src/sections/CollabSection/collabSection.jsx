import styles from './collab.module.css'

import BG from '../../assets/background.webm'

export default function CollabSection() {
    return (
        <div className={styles.collabSection} id='join'>
            <div className={styles.title}>
                <video autoplay loop className={styles.video}>
                    <source
                        src={BG}
                        type="video/webm"
                    />
                </video>
                <div className={styles.Blur}></div>
                <h1>
                    JOIN, COLLABORATE & <br />
                    <span>CELEBRATE</span>
                </h1>
                <p>
                    GSFK is a curated, one-of-a-kind experience open to collaboration, Partnerships and voluntering
                </p>
            </div>

            <div className={styles.partners}>
                <h2>OUR COLLABORATORS</h2>
            </div>
        </div>
    )
}
