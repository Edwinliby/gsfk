import styles from './team.module.css'
import Navbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/footer'
import BG from '../assets/BGVideo.webm'

const members = [
    {
        name: 'John Doe',
        role: 'Festival Director',
        img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
    },
    {
        name: 'Jane Doe',
        role: 'Program Manager',
        img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
    },
    {
        name: 'John Doe',
        role: 'Graphic Design Head',
        img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
    },
    {
        name: 'John Doe',
        role: 'Art Director',
        img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
    },
    {
        name: 'Jane Doe',
        role: 'Partnership Manager',
        img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
    },
    {
        name: 'John Doe',
        role: 'Venue Manager',
        img: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
    },
]

export default function Team() {
    return (
        <>
            <Navbar />
            <div className={styles.teamSection} >
                <video autoPlay muted loop className={styles.video}>
                    <source
                        src={BG}
                        type="video/webm"
                    />
                </video>
                <div className={styles.Blur}></div>

                <div className={styles.title}>
                    <h1>
                        Meet our <span>extraordinary</span> <br />
                        team of creatives
                    </h1>
                    <b>SEK 2024</b>
                </div>

                <div className={styles.members}>
                    {members.map((member, index) => (
                        <div key={index} className={styles.member}>
                            <img src={member.img} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}
