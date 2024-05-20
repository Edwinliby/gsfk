import styles from './about.module.css'

import moon from '../../../assets/moon.webm'
import vr from '../../../assets/schoolgirl.webp'
import { FiExternalLink } from "react-icons/fi";
import Intro from './components/intro'

export default function Navbar() {
    return (
        <>
            <Intro />

            <div className={styles.currentEvent} id='about'>
                <div className={styles.content}>
                    <h1>About</h1>
                    <p>
                        The pursuit of science has shaped our modern world and brought hope, meaning, and empowerment.
                        The Science Expo Kozhikode celebrates this quest for knowledge by bringing together individuals
                        from diverse backgrounds to explore the beauty of science. This is conceived as a satellite programme
                        of the Global Science Festival of Kerala (<a href="https://gsfk.org/" style={{ color: "#000" }}>GSFK</a>) conducted in Thiruvananthapuram in January 2024 by Amuseum
                        in association with the Science and Technology Department, Govt. of Kerala and Kerala State Council for
                        Science technology and Environment.
                        <br /><br />
                        The Science Expo at <b>Kozhikode Beach from May 10th to 26th - 2024</b>, will explore a curated
                        exhibition focussing on <b>'Life Sciences'</b>, industrial pavilions showcasing science and technology,
                        everyday science activities, cultural programs, food festivals, pet shows and street installations. The Science Expo
                        at Kozhikode will welcome students and the public and expects a footfall of over 2 lakh people over 17 days.
                        <br /><br />
                    </p>

                    <p className={styles.amu}>
                        Science Expo Kozhikode is organised by <b>Amuseum ArtScience</b>, Thiruvananthapuram in collaboration
                        with public and private institutions and Science organisations.</p>

                    <br /><br /><br />

                    <h1>AIM</h1>
                    <ul>
                        <li>
                            Foster the community as a knowledge society, promote scientific reasoning and propagate science's philosophy, methodology and objectivity.
                        </li>
                        <li>
                            Create a platform for scientists, scholars, and the public to interact with each other and recontextualise science as a way of life.
                        </li>
                        <li>
                            Celebrate the fusion of science and art with an interdisciplinary approach to better science communication.
                        </li>
                    </ul>

                    <br /><br /><br />

                    <h1>How does Science Expo Spreads Science?</h1>
                    <h2>Through a union of Science & Art</h2>

                    <br />

                    <p>
                        Amuseum Science Expo is an interdisciplinary and international approach to recognise, explore and
                        experience Science through the collaboration of Artists, Scientists, Designers, Architects, Musicians
                        and more. To ensure the nature of science is conveyed at a grassroots level, Science Expo has outreach
                        programmes, satellite events and various exciting campaigns that will occur throughout the country.
                    </p>

                    <br /> <br /><br />

                    <h1>Why Amuseum Science Expo</h1>
                    <p id='glance'>
                        There is something in this world that has touched the lives of everyone and has forever
                        changed their lives. It has shaped humanity and fundamentally affected how we interact with the world around us.
                        For something that has given so much to the world, <b>Science is often forgotten</b>.
                        <br /><br />
                        We at Amuseum Science Expo seek to change that by highlighting the strengths, beauty and limitations of Science.
                    </p>

                    <br /> <br /><br />
                </div>

                <div className={styles.glance}>
                    <h2>At a Glance</h2>
                    <img src={vr} alt="vr-girl" />
                </div>

                <div className={styles.content}>
                    <h1>WHAT?</h1>
                    <p>
                        The Science Expo is an Exhibition of Science, Technology, Engineering, Art and Mathematics (STEAM).
                        This edition focuses on the <b>'Life Sciences'</b>. The expo will also include industrial pavilions, cultural
                        programmes, food festival, book exhibition and many more.
                    </p>

                    <div className={styles.QAList}>
                        <div className={styles.starContainer}>
                            <video className={styles.star} autoPlay muted playsInline loop src={moon}></video>
                            <h4>The Moon</h4>
                        </div>

                        <div className={styles.questions}>
                            <span>
                                <h1>WHY?</h1>
                                <p>
                                    To foster a culture of appreciating science and to examine its strengths and weaknesses.
                                </p>
                            </span>
                            <span>
                                <h1>FOR?</h1>
                                <p>
                                    Festival Attendees, Science Enthusiasts, Scientists, Students and Art lovers.
                                </p>
                            </span>
                            <span>
                                <h1>WHERE?</h1>
                                <p>
                                    Science Expo is at <a href="https://maps.app.goo.gl/iFQURcetJMQVaknDA"><b>Kozhikode Beach</b></a>. <br />
                                    Expo area 30000 sq feet A/C roofed area
                                </p>
                            </span>
                            <span>
                                <h1>WHEN?</h1>
                                <p>
                                    <b>10 May 2024 to 26 May 2024</b> <br />
                                    Expo timings: <b>11. 00 AM - 11. 00 PM</b>
                                </p>
                            </span>
                            <span>
                                <h1>
                                    HOW?
                                </h1>
                                <p>Admission of the visitors will be regulated through tickets.</p>
                                <a
                                    className={styles.bookNow}
                                    href='#'>
                                    <b style={{ color: "#fff" }}>Tickets Closed <FiExternalLink /></b>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}