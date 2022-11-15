import { NavLink } from 'react-router-dom'

function NavList() {
    // This styling will be applied to a <NavLink> when the
    // route that it links to is currently selected.
    let activeStyle = {
        textDecoration: 'underline'
    }

    let activeClassName = 'underline'

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="home" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="movies" className={({ isActive }) => (isActive ? activeClassName : undefined)}>
                        Movies
                    </NavLink>
                </li>
                <li>
                    <NavLink to="tv">
                        {({ isActive }) => <span className={isActive ? activeClassName : undefined}>TV Shows</span>}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavList
