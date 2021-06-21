import React from "react";
import styles from "./FloatingCards.module.css";
import pin02 from "../assets/svg/pin-02.svg";
import Card1 from "./Card1";
import card1Img from "../assets/images/header-img-gardener.jpg";
import card2Img from "../assets/images/header-img-pottery.jpg";
import pin01 from "../assets/svg/pin-01.svg";
import card3Img from "../assets/images/header-img-barista.jpg";

export default function FloatingCards({floatingCards, floatingSvgs}){
    return (
        <>
            <div className={styles.floating_card_1}>
                <img src={pin02} className={styles.pin_02} alt="pin-02" ref={el => floatingSvgs.current.push(el)}/>
                <Card1 imgUrl={card1Img}
                       title={'Green Thumb'}
                       subtitle={'Gardener in CheChe'}
                       ref={el => floatingCards.current.push(el)}/>
            </div>
            <div className={styles.floating_card_2}>
                <Card1 imgUrl={card2Img}
                       title={'Potject'}
                       subtitle={'Pottery in Bangkok'}
                       ref={el => floatingCards.current.push(el)}
                />
            </div>
            <div className={styles.floating_card_3}>
                <img src={pin01} className={styles.pin_01} alt="pin-02" ref={el => floatingSvgs.current.push(el)}/>
                <Card1 imgUrl={card3Img}
                       title={'Green Cafe'}
                       subtitle={'Cafe in Bangkok'}
                       ref={el => floatingCards.current.push(el)}
                />
            </div>
        </>
    );
}