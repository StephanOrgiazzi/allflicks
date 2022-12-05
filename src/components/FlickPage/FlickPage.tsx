import { useFlickPage } from '../../hooks/useFlickPage'
import Loader from '../UI/Loader/Loader'
import styles from './FlickPage.module.scss'

function FlickPage() {
    const {
        isLoading,
        isError,
        title,
        releaseYear,
        genres,
        runtime,
        cover,
        backdrop,
        tagline,
        overview,
        addToWatchListHandler,
        isInWatchList
    } = useFlickPage()

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
