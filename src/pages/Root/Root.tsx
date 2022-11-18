import Nav from '../../components/UI/Nav/Nav'
import { Link, Outlet } from 'react-router-dom'
import styles from './Root.module.scss'

export default function Root() {
    return (
        <>
            <header>
                <Nav />
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
