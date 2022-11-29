import { useNavigate, useParams } from 'react-router-dom'
import { useFlickQuery } from '../../store/apiSlice'
import { convertTime } from '../../utils'
import { backdropBaseUrl, imgBaseUrl } from '../../constants/global'
import { useDispatch, useSelector } from 'react-redux'
import { watchListActions } from '../../store/watchListSlice'
import Loader from '../UI/Loader/Loader'
import { State } from '../../types'
import styles from './FlickPage.module.scss'
import { useEffect } from 'react'

function FlickPage() {
    const { flickType, flickId } = useParams()
    const { data, isLoading, isError } = useFlickQuery({ flickType, flickId }, { skip: !flickId })

    const dispatch = useDispatch()
    const state = useSelector((state: State) => state.watchList)
    const isInWatchList = state.watchList.some((item) => item.id === flickId)

    const { name, number_of_seasons, overview, tagline, title, vote_average: rating, id } = data || {}

    const genres = data?.genres?.map((genre: { id: number; name: string }) => `${genre.name}`).join(', ')
    const runtime = data?.runtime ? convertTime(data?.runtime) : `${number_of_seasons} Seasons`
    const cover = `${imgBaseUrl}${data?.poster_path}`
    const releaseYear = data?.release_date?.substring(0, 4)
    const backdrop = `${backdropBaseUrl}${data?.backdrop_path}`

    let navigate = useNavigate()

    useEffect(() => {
        if (id !== flickId && isError) navigate('/movie')
    }, [id, flickId, isError])

    const addToWatchListHandler = () => {
        dispatch(
            watchListActions.addFlick({
                id: flickId,
                type: flickType,
                title: title || name,
                poster_path: data?.poster_path,
                year: releaseYear
            })
        )
    }

    return (
        <>
            {!isLoading && (
                <section className={styles['flick-page']}>
                    <h2>
                        {title ?? name}
                        <span> {title && `(${releaseYear})`}</span>
                    </h2>
                    <div className={styles.hero} style={{ backgroundImage: `url(${backdrop}` }}>
                        <figure>
                            <img src={cover} alt={`Poster of ${title || name}`} />
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
                    <button type="button" onClick={addToWatchListHandler}>
                        {isInWatchList ? 'Remove from Watchlist' : 'Add to Watchlist'}
                    </button>
                </section>
            )}
            {isError && <p>Error: please try again later.</p>}
            {isLoading && <Loader />}
        </>
    )
}

export default FlickPage
