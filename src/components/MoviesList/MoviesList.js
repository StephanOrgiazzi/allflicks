import MovieCard from '../MovieCard/MovieCard'

import styles from './MoviesList.module.scss'

const MoviesList = ({movies}) => {
    return <ul className={styles.list}>
        {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    cover={movie.poster_path}
                    year={(movie.release_date || '').substring(0, 4)}
                />
        ))}
    </ul>
}

export default MoviesList