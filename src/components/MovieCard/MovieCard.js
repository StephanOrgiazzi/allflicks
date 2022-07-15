import { Link } from 'react-router-dom'

import styles from './MovieCard.module.scss'

const MovieCard = props => {
    return <div className={styles['movie-card']}>
        <Link to={`/movie/${props.id}`}>
            <figure>
                <img src={`https://image.tmdb.org/t/p/w154/${props.cover}`} alt={`${props.title} poster`} />
                <figcaption>{props.title}</figcaption>
            </figure>
            <p>{props.year}</p>
        </Link>
    </div>
}

export default MovieCard
