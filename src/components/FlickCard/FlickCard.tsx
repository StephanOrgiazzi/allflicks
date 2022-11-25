import { Link } from 'react-router-dom'
import { Flick } from '../../types'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import styles from './FlickCard.module.scss'

const FlickCard = ({ id, title, poster_path: cover, type, year }: Flick) => {
    const url = `https://www.themoviedb.org/t/p/w220_and_h330_face/${cover}`

    return (
        <Link to={`/${type}/${id}`}>
            <li className={styles['flick-card']}>
                <figure>
                    <LazyLoadImage
                        src={url}
                        alt={`Poster of ${title}`}
                        width={150}
                        height={225}
                        //placeholder={<h1>Image taken from https://via.placeholder.com/150</h1>}
                        effect="blur"
                    />
                    <figcaption>{title}</figcaption>
                </figure>
            </li>
        </Link>
    )
}

export default FlickCard
