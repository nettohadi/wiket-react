import React from "react";
import styles from "./FloatingCardsMobile.module.css";
import pin02 from "../assets/svg/pin-02.svg";
import Card1 from "./Card1";
import card1Img from "../assets/images/header-img-gardener.jpg";
import card2Img from "../assets/images/header-img-pottery.jpg";
import pin01 from "../assets/svg/pin-01.svg";
import card3Img from "../assets/images/header-img-barista.jpg";
import headerLineMobile from "../assets/svg/header-line-phone-portrait.svg";
import Description from "./Description";

export default function FloatingCardsMobile(){
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_inner}>
                <div className={styles.floating_card_1_mobile}>
                    <Card1 imgUrl={card1Img}
                           title={'Green Thumb'}
                           subtitle={'Gardener in CheChe'}/>
                </div>
                <div className={styles.floating_card_2_mobile}>
                    <Card1 imgUrl={card2Img}
                           title={'Potject'}
                           subtitle={'Pottery in Bangkok'}/>
                </div>
                <div className={styles.floating_card_3_mobile}>
                    <Card1 imgUrl={card3Img}
                           title={'Green Cafe'}
                           subtitle={'Cafe in Bangkok'}/>
                </div>
                {/*  SVG Image  */}
                <div className={styles.floating_line_dektop}>
                    <img src={headerLineMobile} alt="pin line"/>
                </div>
            </div>
        </div>
    );
}