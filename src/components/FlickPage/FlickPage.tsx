import { useParams } from 'react-router-dom'
import { useFlickQuery } from '../../store/apiSlice'
import { convertTime } from '../../utils'
import { backdropBaseUrl, imgBaseUrl } from '../../constants/global'
import styles from './FlickPage.module.scss'

function FlickPage() {
    const { flickType, flickId } = useParams()
    const { data, isLoading, isError } = useFlickQuery({ flickType, flickId }, { skip: !flickId })

    const { name, number_of_seasons, overview, tagline, title, vote_average: rating } = data || {}

    const genres = data?.genres?.map((genre: { id: number; name: string }) => `${genre.name}`).join(', ')
    const runtime = data?.runtime ? convertTime(data?.runtime) : `${number_of_seasons} Seasons`
    const cover = `${imgBaseUrl}${data?.poster_path}`
    const releaseYear = data?.release_date?.substring(0, 4)
    const backdrop = `${backdropBaseUrl}${data?.backdrop_path}`

    return (
        <section className={styles['flick-page']}>
            <h2>
                {title ?? name}
                <span> {title && `(${releaseYear})`}</span>
            </h2>
            <div className={styles.hero} style={{ backgroundImage: `url(${backdrop}` }}>
                <figure>
                    <img src={cover} alt="Poster of the movie" />
                </figure>
                <figcaption>
                    {title ?? name} <span> {title && `(${releaseYear})`}</span>
                </figcaption>
            </div>
            <p>
                <span>{genres}</span> &#8226; <span>{runtime}</span>
            </p>
            <div className={styles['info']}>
                <h3>{tagline}</h3>
                <p>{overview}</p>
            </div>
            {isError && <p>Error: please try again later.</p>}
        </section>
    )
}

export default FlickPage
