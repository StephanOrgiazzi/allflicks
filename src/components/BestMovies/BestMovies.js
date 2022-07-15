import { useState, useEffect } from 'react'

import useFetch from '../../hooks/useFetch'
import { baseUrl, apiKey } from '../../constants/global'
import MoviesSwiper from '../MoviesSwiper/MoviesSwiper'

import styles from './BestMovies.module.scss'

const BestMovies = () => {
    const [moviesList, setMoviesList] = useState([])

    const { loading, error, sendRequest: fetchMovies } = useFetch()

    useEffect(() => {
        const url = `${baseUrl}/discover/movie?${apiKey}&language=en-US&sort_by=vote_average.desc&vote_count.gte=300&include_adult=false&include_video=false&page=1`

        const addMovies = movies => {
            const list = [...movies.results]
            setMoviesList(prevMovies => prevMovies.concat(list))
        }
        fetchMovies(url, addMovies)
    }, [fetchMovies])

    return <section className={styles['best-movies']}>
        <h1>Best Movies</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Failed to load movies. Please try again.</p>}
        {moviesList && <MoviesSwiper movies={moviesList} />}
    </section>
}

export default BestMovies