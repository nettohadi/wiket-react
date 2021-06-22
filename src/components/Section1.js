import React from "react";
import styles from './Section1.module.css';
import headerLineDesktop from '../assets/svg/header-line-desktop.svg';
import Description from "./Description";
import Hero from "./Hero";
import {gsap} from "gsap";
import {isMobile} from "../helpers";

const timeline = gsap.timeline();
export default function Section1() {
    const heading = React.useRef(null);
    const descMobile = React.useRef(null);
    const floatingLine = React.useRef(null);

    React.useEffect(() => {
        let options = {};
        if (isMobile()) {
            options = {
                y: 60,
                delay: .1,
                scale: 1,
                duration: .7
            }
        }

        timeline
            .from(heading.current, {
                ease: 'none',
                opacity: 0,
                duration: .5,
                delay: 1.5,
                scale: 0.99,
                ...options
            })
            .from(floatingLine.current, {
                opacity: 0,
                ease: 'none',
                duration: 1,
            }, '-=.1');

        if (isMobile()) {
            timeline.from(descMobile.current, {
                opacity: 0,
                y: 50,
            }, '-=1');
        }
    }, []);

    return (
        <section>
            {/* Hero Image */}
            <Hero/>
            {/* Title */}
            <div className={styles.wording_wrapper} ref={heading}>
                <h5 className={[styles.sub + ' primary-font-color']}>
                    Explore new opportunities
                </h5>
                <h1 className={[styles.head + ' primary-font-color']}>
                    <span className='secondary-font-color'>Grow</span> your business.
                </h1>
                <div className={styles.description_mobile} ref={descMobile}>
                    <Description/>
                </div>
            </div>
            {/*  SVG Image  */}
            <div className={styles.floating_line_desktop} ref={floatingLine}>
                <img src={headerLineDesktop} alt="pin line"/>
                <div style={{paddingTop: 70}}>
                    <Description/>
                </div>
            </div>
        </section>
    );
}