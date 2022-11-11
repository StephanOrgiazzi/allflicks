import { Link, Outlet } from 'react-router-dom'

export default function Root() {
    return (
        <>
            <header>
                <h1>Root page</h1>
            </header>
            <Outlet />
        </>
    )
}
