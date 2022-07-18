import { useContext } from 'react'
import FavContext from '../../store/fav-context'
import MoviesList from '../MoviesList/MoviesList'

import styles from './Watchlist.module.scss'

const Watchlist = () => {
    const ctx = useContext(FavContext)

    return <section className={styles.watchlist}>
        <h1>My Watchlist</h1>
        {ctx.favMovies.length < 1 && <p>No movies added yet.</p>}
        {ctx.favMovies.length > 0 && <MoviesList movies={ctx.favMovies} />}
    </section>
}

export default Watchlist