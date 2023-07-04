import { Link } from 'react-router-dom'
import style from '../style/components/menu.module.css'

const Menu = () => {
    return (
        <nav className={style.menuContainer}>
            <li>
                <Link className={style.menuLink} to='/'>Home</Link>
            </li>
            <li>
                <Link className={style.menuLink} to='/sobre'>Sobre</Link>
            </li>
            <li>
                <Link className={style.menuLink} to='/portfolio'>Portfólio</Link>
            </li>
            <li>
                <Link className={style.menuLink} to='/contato'>Contato</Link>
            </li>
        </nav>
    )
}

export default Menu