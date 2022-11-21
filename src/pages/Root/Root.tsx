import Nav from '../../components/UI/Nav/Nav'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from './Root.module.scss'
import { useEffect } from 'react'

export default function Root() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/movie')
    }, [])

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
