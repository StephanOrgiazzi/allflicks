import { Link, NavLink } from 'react-router-dom'
import styles from './Nav.module.scss'
import Logo from '../../../assets/logo.png'

function Nav() {
    let activeStyle = {
        textDecoration: 'underline'
    }

    let activeClassName = 'underline'

    return (
        <nav className={styles.nav}>
            <Link to="/">
                <figure>
                    <img className={styles.logo} src={Logo} alt="AllFlicks logo" />
                </figure>
            </Link>
            <ul>
                <li>
                    <NavLink to="movie" className={({ isActive }) => (isActive ? activeClassName : undefined)}>
                        Movies
                    </NavLink>
                </li>
                <li>
                    <NavLink to="tv">
                        {({ isActive }) => <span className={isActive ? activeClassName : undefined}>TV Shows</span>}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="watchlist">
                        {({ isActive }) => <span className={isActive ? activeClassName : undefined}>Watchlist</span>}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
