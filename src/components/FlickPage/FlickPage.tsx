import { useParams } from 'react-router-dom'
import { useFlickQuery } from '../../features/api/apiSlice'
import { convertTime } from '../../utils'
import styles from './FlickPage.module.scss'

function FlickPage() {
    const { flickType, flickId } = useParams()
    const { data } = useFlickQuery({ flickType, flickId }, { skip: !flickId })

    const {
        backdrop_path: backdrop,
        description,
        overview,
        name,
        release_date: releaseDate,
        tagline,
        title,
        vote_average: rating
    } = data || {}

    const genres = data?.genres?.map((genre: any) => `${genre.name}`).join(', ')
    const runtime = convertTime(data?.runtime)
    const cover = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data?.poster_path}`

    console.log('data', data)

    return (
        <section>
            <h2>{title ?? name}</h2>
            <p>
                <span>{genres}</span> &#8226; <span>{runtime}</span>
            </p>
            <div className={styles.hero}>
                <div className={styles['cover-wrapper']}>
                    <div className={styles.backdrop} style={{ backgroundImage: `url(${backdrop}` }}></div>
                    <figure>
                        <img src={cover} alt="Poster of the movie" />
                    </figure>
                </div>
                <div className={styles['info-wrapper']}>
                    <h3>{tagline}</h3>
                    <p>{overview}</p>
                </div>
            </div>
        </section>
    )
}

export default FlickPage
