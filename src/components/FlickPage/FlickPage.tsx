import { useParams } from 'react-router-dom'
import { useFlickQuery } from '../../store/apiSlice'
import { convertTime } from '../../utils'
import styles from './FlickPage.module.scss'

function FlickPage() {
    const { flickType, flickId } = useParams()
    const { data } = useFlickQuery({ flickType, flickId }, { skip: !flickId })

    const {
        backdrop_path: backdrop,
        name,
        number_of_seasons,
        overview,
        release_date: releaseDate,
        tagline,
        title,
        vote_average: rating
    } = data || {}

    const genres = data?.genres?.map((genre: { id: number; name: string }) => `${genre.name}`).join(', ')
    const runtime = data?.runtime ? convertTime(data?.runtime) : `${number_of_seasons} Seasons`
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
