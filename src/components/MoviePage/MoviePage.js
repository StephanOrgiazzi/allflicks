import { useState, useEffect, useContext } from 'react'
import { useParams, Link} from 'react-router-dom'

import useFetch from '../../hooks/useFetch'
import { baseUrl, apiKey } from '../../constants/global'
import FavContext from '../../store/fav-context'

import styles from './MoviePage.module.scss'

const MoviePage = () => {
    // movie.title.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-')}` 
    const params = useParams()

    const [movieData, setMovieData] = useState([])

    const ctx = useContext(FavContext)

    const url = `${baseUrl}/movie/${params.movieId.toString()}?${apiKey}`
    const { loading, error, sendRequest: fetchMovieData } = useFetch()

    useEffect(() => {
        const addMovie = movie => {
            setMovieData(movie)
        }
        fetchMovieData(url, addMovie)
    }, [fetchMovieData, url])

    const convertTime = (time) => {
        const hours = Math.floor(time / 60)
        const minutes = time % 60
        return `${hours}h ${minutes}min`
    }

    const releaseYear = movieData.release_date && movieData.release_date.substring(0, 4)
    const runtime = convertTime(movieData.runtime)
    const posterPath = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movieData.poster_path}`
    const backdropPath = `https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`
    const genres = movieData.genres && movieData.genres.map(genre => (
        `${genre.name}`
    )).join(', ')
    const rating = movieData.vote_average
    const isOk = rating < 7 ? styles.ok : ''
    const isBad = rating < 5 ? styles.bad : ''
    const isFaved = ctx.favMovies.find(el => el.id === movieData.id) ? 'Remove from' : 'Add to'

    const addToFavHandler = () => {
        ctx.onAddMovie(
            movieData.id,
            movieData.title,
            posterPath,
            movieData.release_date)
    }

    return <section className={styles['movie-page']}>
        {error && <p>Error: please try again later.</p>}
        {!loading && rating > 0 &&
            <>
            <Link to="/">
                <button className={styles['back-button']}>&larr; Back</button>
            </Link>    
            <h2>{movieData.title}<span> ({releaseYear})</span></h2>
                <p>
                    <span>{genres}</span> &#8226; <span>{runtime}</span>
                </p>
                <div className={styles.hero} >
                    <div className={styles['cover-wrapper']}>
                        <div className={styles.backdrop} style={{ backgroundImage: `url(${backdropPath}` }}></div>
                        <figure>
                            <img src={posterPath} alt="Poster of the movie" />
                        </figure>
                    </div>
                    <div className={styles['info-wrapper']}>
                        <div className={`${styles['score-card']} ${isOk} ${isBad}`}>
                            <div className={styles.rating}>
                                {rating}
                                <p>Score</p>
                            </div>
                        </div>
                    <h3>{movieData.tagline}</h3>
                    <p>{movieData.overview}</p>
                    </div>
                </div>
                <button className={styles['watchlist-button']} onClick={addToFavHandler}>{ isFaved } your watchlist</button>
            </>
        }
    </section>
}

export default MoviePage