import React from "react";
import styles from './Section1.module.css';
import hero from '../assets/images/header-img-florist.jpg';
import Card1 from "./Card1";
import card1Img from '../assets/images/header-img-gardener.jpg';
import card2Img from '../assets/images/header-img-pottery.jpg';
import card3Img from '../assets/images/header-img-barista.jpg';
import pin02 from '../assets/svg/pin-02.svg';
import pin01 from '../assets/svg/pin-01.svg';
import headerLineDesktop from '../assets/svg/header-line-desktop.svg';
import Description from "./Description";
import Hero from "./Hero";

export default function Section1(){

    return (
        <section>
            {/* Hero Image */}
            <Hero/>
            {/* Title */}
            <div className={styles.wording_wrapper}>
                <h5 className={[styles.sub + ' primary-font-color']}>
                    Explore new opportunities
                </h5>
                <h1 className={[styles.head + ' primary-font-color']}>
                    <span className='secondary-font-color'>Grow</span> your business.
                </h1>
                <div className={styles.description_mobile}>
                    <Description/>
                </div>
            </div>
            {/*  SVG Image  */}
            <div className={styles.floating_line_dektop}>
                <img src={headerLineDesktop} alt="pin line"/>
                <div style={{paddingTop: 70}}>
                    <Description/>
                </div>
            </div>
        </section>
    );
}