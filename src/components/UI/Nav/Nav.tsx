import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../../assets/logo.png'
import { listStateActions } from '../../../store/listStateSlice'
import styles from './Nav.module.scss'

function Nav() {
    const dispatch = useDispatch()
    return (
        <nav className={styles.nav}>
            <Link to="movie">
                <figure>
                    <img className={styles.logo} src={Logo} alt="AllFlicks logo" />
                </figure>
            </Link>
            <ul>
                <li>
                    <NavLink
                        to="movie"
                        style={({ isActive }) => (isActive ? { color: '#f5f5f5' } : { color: '#545e6f' })}
                        onClick={() => dispatch(listStateActions.resetState())}
                    >
                        Movies
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="tv"
                        style={({ isActive }) => (isActive ? { color: '#f5f5f5' } : { color: '#545e6f' })}
                        onClick={() => dispatch(listStateActions.resetState())}
                    >
                        TV Shows
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="watchlist"
                        style={({ isActive }) => (isActive ? { color: '#f5f5f5' } : { color: '#545e6f' })}
                    >
                        Watchlist
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
