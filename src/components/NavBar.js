import logo from '../assets/svg/wiket-logo.svg'
import styles from './NavBar.module.css';
import menuIcon from '../assets/images/menu-icon.png';

export default function NavBar() {
    return (
        <header>
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

