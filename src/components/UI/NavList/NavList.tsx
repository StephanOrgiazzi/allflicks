import { NavLink } from 'react-router-dom'

function NavList() {
    let activeStyle = {
        textDecoration: 'underline'
    }

    let activeClassName = 'underline'

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                        Home
                    </NavLink>
                </li>
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

export default NavList
