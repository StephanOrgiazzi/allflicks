import { Flick } from '../FlicksList/FlicksList'

import styles from './FlickCard.module.scss'

const FlickCard = ({ title, poster_path: cover, year }: Flick) => {
    return (
        <li className={styles['flick-card']}>
            <figure>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${cover}`} alt={`${title} poster`} />
                <figcaption>{title}</figcaption>
            </figure>
        </li>
    )
}

export default FlickCard
