import Nav from '../../components/UI/Nav/Nav'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import styles from './Root.module.scss'
import { useEffect } from 'react'
import Footer from '../../components/UI/Footer/Footer'

export default function Root() {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname === '/') navigate('/movie')
    }, [])

    return (
        <>
            <header>
                <Nav />
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
