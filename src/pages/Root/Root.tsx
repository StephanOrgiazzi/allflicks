import { Link, Outlet } from 'react-router-dom'
import styles from './Root.module.scss'

export default function Root() {
    return (
        <>
            <header>
                <h1>Root page</h1>
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
        </>
    )
}
