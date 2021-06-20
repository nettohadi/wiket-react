import React from "react";
import styles from './Description.module.css';

export default function Description() {
    return (
        <div className={styles.desc + ' primary-font-color'}>
            <span>Wiket is the first business to business network</span>
            <span style={{fontWeight: 400}}> which lets you connect to mind like people.</span>
        </div>
    );
}