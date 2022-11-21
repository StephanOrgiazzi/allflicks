import Nav from '../../components/UI/Nav/Nav'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styles from './Root.module.scss'
import { useEffect } from 'react'
import Footer from '../../components/UI/Footer/Footer'

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
            <Footer />
        </>
    )
}
