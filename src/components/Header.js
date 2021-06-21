import React from "react";
import logo from '../assets/svg/wiket-logo.svg'
import styles from './Header.module.css';
import menuIcon from '../assets/images/menu-icon.png';
import {gsap} from "gsap";
import {isMobile} from "../helpers";

const timeline = gsap.timeline();

export default function Header() {
    const header = React.useRef();

    React.useEffect(() => {
        //default delay
        let options = {
            delay: 1.7
        };

        // different animation delay for mobile screen
        if(isMobile()){
            options = {
                delay: 0
            }
        }

        timeline.from(header.current, {
            opacity: 0,
            ease: 'none',
            duration: .5,
            ...options
        });

    });

    return (
        <header ref={header}>
            <div className={styles.logo_wrapper}>
                <img className={styles.logo} src={logo} alt=""/>
            </div>
            <div className={styles.nav_wrapper}>
                <nav>
                    <div>Benefits</div>
                    <div>Your Profile</div>
                    <div>Connections</div>
                    <div>Plans & Pricing</div>
                </nav>
                <button className='primary-button'>Get Started</button>
                <img className={styles.mobile_menu} src={menuIcon} alt="menu-icon"/>
            </div>
        </header>
    );
}

