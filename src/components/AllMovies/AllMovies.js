import { useState, useEffect } from 'react'

import useInfiniteScroll from 'react-infinite-scroll-hook';

import useFetch from '../../hooks/useFetch'
import { baseUrl, apiKey } from '../../constants/global'

import MoviesList from '../MoviesList/MoviesList'

import styles from './AllMovies.module.scss'

const AllMovies = () => {
    const [moviesList, setMoviesList] = useState([])
    const [genre, setGenre] = useState('all')
    const [page, setPage] = useState(1)
    const [hasNextPage, setHasNextPage] = useState(true)

    const { loading, error, sendRequest: fetchMovies } = useFetch()

    if (error) { setHasNextPage(false) }

    useEffect(() => {
        const url = `${baseUrl}/discover/movie?${apiKey}&sort_by=popularity.desc&vote_count.gte=300&with_genres=${genre}&page=${page.toString()}`
        
        const addMovies = movies => {
            const list = [...movies.results]
            setMoviesList(prevMovies => prevMovies.concat(list))
        }

        fetchMovies(url, addMovies)
    }, [fetchMovies, genre, page])

    const [sentryRef] = useInfiniteScroll({
        loading,
        hasNextPage: hasNextPage,
        onLoadMore: () => {
            setPage(page + 1)
        }   
    })

    const changeGenreHandler = e => {
        setMoviesList([])
        setGenre(e.target.value)
    }

    const options = [
        { value: '', name: 'All' },
        { value: '28', name: 'Action' },
        { value: '12', name: 'Adventure' },
        { value: '35', name: 'Comedy' },
        { value: '18', name: 'Drama' },
        { value: '36', name: 'History' },
        { value: '10749', name: 'Romance' },
        { value: '878', name: 'Sci-Fi' },
        { value: '53', name: 'Thriller' },
        { value: '10752', name: 'War' }
    ]

    return <section className={styles['all-movies']}>
        <h1>All Movies</h1>
        <select name="genre" id="genre-select" onChange={changeGenreHandler}>
            <option disabled>Genre</option>
            { options.map(option => {
                return <option value={option.value}>{option.name}</option>
            })}
        </select>
        {error && <p>Failed to load movies. Please try again.</p>}
        {moviesList && <MoviesList movies={moviesList} />}
        {(loading || hasNextPage) && <div ref={sentryRef}></div>}
    </section>
}

export default AllMovies