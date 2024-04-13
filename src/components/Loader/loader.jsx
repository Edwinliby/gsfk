import './loader.css'

import loader_logo from '../../assets/loader-logo.webp'
import loader_spon from '../../assets/loader-spon.webp'
import science from '../../assets/sci-mal.webp'
import expo from '../../assets/expo-mal.webp'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Loader() {

    const logo = useRef(null)
    const sponser = useRef(null)
    const container = useRef(null)
    const loader = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.to(logo.current, {
            duration: 1,
            scale: .8,
            ease: 'power2.inOut',
            delay: 1
        })

        tl.to(container.current, {
            duration: 1,
            opacity: 1,
        })

        tl.to(sponser.current, {
            duration: 1.5,
            opacity: 1,
            ease: 'power2.inOut',
        })

        tl.to(loader.current, {
            duration: 2,
            opacity: 0,
        })
    })

    return (
        <div className='loader'>
            <div ref={loader} className='load-center'>
                <img ref={logo} src={loader_logo} alt="expo-logo" className='loader_logo' />
                <div ref={container} className='logo_container'>
                    <img src={science} alt="" className='sci-mal' />
                    <img src={expo} alt="" className='expo-eng' />
                </div>
                <img ref={sponser} src={loader_spon} alt="" className='loader_spon' />
            </div>
        </div >
    )
}
