import { Link } from 'react-router-dom'
import styles from '../styles/components/menu.module.css'

const Menu = () => {
    return (
        <nav className={styles.menuContainer}>
            <div className={styles.logo}>LÊMAX</div>
            <div className={styles.navLink}>
                <ul className={styles.navItens}>
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/sobre'>SOBRE</Link>
                    </li>
                    <li>
                        <Link to='/portfolio'>CÓDIGOS</Link>
                    </li>
                    <li>
                        <Link to='/contato'>VEM HABLAR</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu