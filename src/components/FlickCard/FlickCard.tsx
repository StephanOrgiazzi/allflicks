import { Flick } from '../../types'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styles from './FlickCard.module.scss'
import 'react-lazy-load-image-component/src/effects/blur.css'

const FlickCard = ({ id, title, poster_path: cover, type, year }: Flick) => {
    const url = `https://www.themoviedb.org/t/p/w220_and_h330_face/${cover}`

    return (
        <Link to={`/${type}/${id}`}>
            <li className={styles['flick-card']}>
                <figure>
                    <LazyLoadImage src={url} alt={`Poster of ${title}`} width={150} height={225} effect="blur" />
                    <figcaption>{title}</figcaption>
                </figure>
            </li>
        </Link>
    )
}

export default FlickCard
