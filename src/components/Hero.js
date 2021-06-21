import React from "react";
import styles from "./Hero.module.css";
import hero from "../assets/images/header-img-florist.jpg";
import pin02 from "../assets/svg/pin-02.svg";
import Card1 from "./Card1";
import card1Img from "../assets/images/header-img-gardener.jpg";
import card2Img from "../assets/images/header-img-pottery.jpg";
import pin01 from "../assets/svg/pin-01.svg";
import card3Img from "../assets/images/header-img-barista.jpg";
import FloatingCards from "./FloatingCards";
import FloatingCardsMobile from "./FloatingCardsMobile";

export default function Hero() {
    return (
        <div className={styles.hero_image_wrapper}>
            <img  className={styles.hero_image} src={hero} alt="hero image"/>
            <div className={styles.hero_desc}>
                <div className={styles.caption_name + ' primary-font-color'}>
                    Hanging Garden
                </div>
                <div className={styles.caption_description + ' primary-font-color'}>
                    Florist in Bangkok
                </div>
            </div>
            <FloatingCards/>
        </div>
    );
}
