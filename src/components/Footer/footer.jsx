import styles from './footer.module.css';

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.title}>
                <h1>FUTURE WORLD <br /> <span>WHERE ART MEETS SCIENCE</span></h1>
                <p>
                    Come and make this grand <br />
                    celebration of Science a reality
                </p>
            </div>

            <hr />

            <div className={styles.navLinks}>
                <div className={styles.links}>
                    <a href="/">Home</a>
                    <a href="#about">About</a>
                    <a href="/team">Team</a>
                    <a href="#join">Join Us</a>
                </div>
                <div className={styles.social}>
                    <a href="/"><FaFacebook size={25} /></a>
                    <a href="/"><FaInstagram size={25} /></a>
                    <a href="/"><FaXTwitter size={25} /></a>
                </div>
            </div>

            <div className={styles.details}>
                <span>
                    <b>Office</b> <br />
                    Althara nagar, Vellayamalam <br />
                    Thiruvananthapuram, 695010
                </span>
                <span>
                    <b>E-mail</b> <br />
                    <a href="mailto:hello@gsfk.org">hello@gsfk.org</a> <br />
                    <a href="mailto:partnerships@gsfk.org">partnerships@gsfk.org</a>
                </span>
                <span>
                    <b>Phone</b> <br />
                    <a href="tel:9846661461">+91 98466 61461</a>
                </span>
            </div>

            <p style={{ fontSize: ".8rem", paddingLeft: "1rem" }}>GSFK Copyright ©️2024 </p>

        </footer>
    )
}
