import React from "react";
import './Card1.module.css';
import styles from './Card1.module.css';

export default function  Card1({imgUrl='', title='', subtitle=''}){
    return (
        <div className={styles.card_wrapper}>
            <img src={imgUrl} alt="card image"/>
            <div className={styles.title + ' primary-font-color'}>{title}</div>
            <div className={styles.subTitle}>{subtitle}</div>
        </div>
    );
}