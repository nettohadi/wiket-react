import React from "react";
import './Card1.module.css';
import styles from './Card1.module.css';

const  Card1 = React.forwardRef(({imgUrl='', title='', subtitle=''}, ref) => {
    return (
        <div className={styles.card_wrapper} ref={ref}>
            <img src={imgUrl} alt="card image"/>
            <div className={styles.title + ' primary-font-color'}>{title}</div>
            <div className={styles.subTitle}>{subtitle}</div>
        </div>
    );
});

export default Card1;