import styles from './Header.module.scss'
import Logo from '../../../public/logo.svg'
export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}><img src={Logo} width="200px" /></div>
            <nav className={styles.headerContainer}>
                <ul className={styles.headerContainerItems}>
                    <li><a href="https://codepen.io/robwellish" target="_blank"><i className="fa fa-codepen nav-icon"></i><span>About</span></a></li>
                    <li><a href="#"><i className="fa fa-linkedin nav-icon"></i><span>Services</span></a></li>
                    <li><a href="#"><i className="fa fa-globe nav-icon"></i><span>Merch</span></a></li>
                    <li><a href="#"><i className="fa fa-github nav-icon"></i><span>Contact</span></a></li>
                    <li><a href="#"><i className="fa fa-github nav-icon"></i><span>Log In</span></a></li>
                </ul>
            </nav>
        </div>

    )
};