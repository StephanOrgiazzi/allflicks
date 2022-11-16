import NavList from '../../components/UI/NavList/NavList'
import { Link, Outlet } from 'react-router-dom'
import styles from './Root.module.scss'

export default function Root() {
    return (
        <>
            <header>
                <h1>Root page</h1>
                <NavList />
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
            <footer>
                <Link to="about">About</Link>
            </footer>
        </>
    )
}
