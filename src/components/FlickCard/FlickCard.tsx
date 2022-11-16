import { Link } from 'react-router-dom'
import { Flick } from '../FlicksList/FlicksList'

import styles from './FlickCard.module.scss'

const FlickCard = ({ id, title, poster_path: cover, type, year }: Flick) => {
    const url = `https://www.themoviedb.org/t/p/w220_and_h330_face/${cover}`

    return (
        <Link to={`/${type}/${id}`}>
            <li className={styles['flick-card']}>
                <figure>
                    <img src={url} alt={`${title} poster`} />
                    <figcaption>{title}</figcaption>
                </figure>
            </li>
        </Link>
    )
}

export default FlickCard
