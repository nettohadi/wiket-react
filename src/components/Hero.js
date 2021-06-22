import React from "react";
import styles from "./Hero.module.css";
import hero from "../assets/images/header-img-florist.jpg";
import FloatingCards from "./FloatingCards";
import {gsap} from 'gsap';
import {isMobile} from "../helpers";

const timeline = gsap.timeline();

export default function Hero() {
    const heroImage = React.useRef(null);
    const floatingCards = React.useRef([]);
    const floatingSvgs = React.useRef([]);

    React.useEffect(() => {
        let options = {};
        if (isMobile()) {
            options = {
                delay: .8
            }
        }

        timeline
            .from(heroImage.current, {
                y: 30,
                opacity: 0,
                ease: 'none',
                delay: .3,
                duration: 0.5,
                ...options
            })
            .from(floatingCards.current[1], {
                y: 50,
                opacity: 0,
                ease: 'none',
                duration: 0.5,
            }, '-=.3')
            .from(floatingCards.current[0], {
                y: 50,
                opacity: 0,
                ease: 'none',
                duration: 0.8,
            }, '-=.3')
            .from(floatingCards.current[2], {
                y: 50,
                opacity: 0,
                ease: 'none',
                duration: 0.8,
            }, '-=.1')
            .from(floatingSvgs.current[0], {
                opacity: 0,
                ease: 'none',
                delay: .2
            })
            .from(floatingSvgs.current[1], {
                opacity: 0,
                ease: 'none',
            }, '-=.4')

        gsap.to(floatingCards.current[1], {
            y: 10,
            ease: 'none',
            duration: 3,
            delay: 1.3,
            repeat: -1,
            yoyo: true
        });

        gsap.to(floatingSvgs.current[0], {
            y: 10,
            ease: 'none',
            duration: 3,
            delay: 1.3,
            repeat: -1,
            yoyo: true
        });

        gsap.to(floatingSvgs.current[1], {
            y: 10,
            ease: 'none',
            duration: 3,
            delay: 1.3,
            repeat: -1,
            yoyo: true
        });

        gsap.to(floatingCards.current[0], {
            y: 10,
            ease: 'none',
            duration: 3,
            delay: 1.3,
            repeat: -1,
            yoyo: true
        });

        gsap.to(floatingCards.current[2], {
            y: 10,
            ease: 'none',
            duration: 3,
            delay: 1.3,
            repeat: -1,
            yoyo: true
        });

    }, []);

    return (
        <div className={styles.hero_image_wrapper}>
            <div ref={heroImage} style={{display: 'flex', flexDirection: 'column'}}>
                <img className={styles.hero_image} src={hero} alt="hero image"/>
                <div className={styles.hero_desc}>
                    <div className={styles.caption_name + ' primary-font-color'}>
                        Hanging Garden
                    </div>
                    <div className={styles.caption_description + ' primary-font-color'}>
                        Florist in Bangkok
                    </div>
                </div>
            </div>
            <FloatingCards floatingCards={floatingCards} floatingSvgs={floatingSvgs}/>
        </div>
    );
}
