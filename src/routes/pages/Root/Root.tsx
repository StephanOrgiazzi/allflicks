import { useEffect } from 'react'
import Nav from '../../../components/UI/Nav/Nav'
import Footer from '../../../components/UI/Footer/Footer'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import styles from './Root.module.scss'

function Root() {
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

export default Root
