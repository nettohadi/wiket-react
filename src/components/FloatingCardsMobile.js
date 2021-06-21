import React from "react";
import styles from "./FloatingCardsMobile.module.css";
import pin02 from "../assets/svg/pin-02.svg";
import Card1 from "./Card1";
import card1Img from "../assets/images/header-img-gardener.jpg";
import card2Img from "../assets/images/header-img-pottery.jpg";
import pin01 from "../assets/svg/pin-01.svg";
import card3Img from "../assets/images/header-img-barista.jpg";
import headerLineMobile from "../assets/svg/header-line-phone-portrait.svg";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {gsap} from 'gsap';

gsap.registerPlugin(ScrollTrigger);


export default function FloatingCardsMobile() {
    const floatingCards = React.useRef([]);
    const floatingLineMobile = React.useRef(null);


    React.useEffect(() => {

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: floatingCards.current[1],
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });

        timeline.from(floatingCards.current[1], {
                    y: 50,
                    opacity: 0,
                    ease: 'none',
                    duration: 0.5,
                }, '-=.3')
                .from(floatingCards.current[0], {
                    y: 50,
                    opacity: 0,
                    ease: 'none',
                }, '-=.3')
                .from(floatingCards.current[2], {
                    y: 50,
                    opacity: 0,
                    ease: 'none',
                }, '-=.1')
                .from(floatingLineMobile.current, {
                    opacity: 0,
                    ease: 'none'
                }, '-=.7');
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_inner}>
                <div className={styles.floating_card_1_mobile}>
                    <Card1 imgUrl={card1Img}
                           title={'Green Thumb'}
                           subtitle={'Gardener in CheChe'} ref={el => floatingCards.current.push(el)}/>
                </div>
                <div className={styles.floating_card_2_mobile}>
                    <Card1 imgUrl={card2Img}
                           title={'Potject'}
                           subtitle={'Pottery in Bangkok'} ref={el => floatingCards.current.push(el)}/>
                </div>
                <div className={styles.floating_card_3_mobile}>
                    <Card1 imgUrl={card3Img}
                           title={'Green Cafe'}
                           subtitle={'Cafe in Bangkok'} ref={el => floatingCards.current.push(el)}/>
                </div>
                {/*  SVG Image  */}
                <div className={styles.floating_line_mobile} ref={floatingLineMobile}>
                    <img src={headerLineMobile} alt="pin line"/>
                </div>
            </div>
        </div>
    );
}