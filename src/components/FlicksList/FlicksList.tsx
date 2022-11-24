import { useCallback, useEffect, useState } from 'react'
import { useFlicksListQuery, usePrefetch } from '../../store/apiSlice'
import FlickCard from '../FlickCard/FlickCard'
import { Flick, FlickElement } from '../../types'
import { movieGenreOptions, tvGenreOptions } from '../../constants/global'
import styles from './FlicksList.module.scss'
import Loader from '../UI/Loader/Loader'

function FlicksList({ type, list }: { type?: string; list?: FlickElement[] }) {
    const [page, setPage] = useState(1)
    const [genre, setGenre] = useState('all')
    const [flickType] = useState(type)
    const genreOptions = flickType === 'movie' ? movieGenreOptions : tvGenreOptions

    let {
        data: flicks,
        isLoading,
        isError
    } = useFlicksListQuery({ flickType, page, genre }, { refetchOnMountOrArgChange: true, skip: !type ?? list })

    if (list) {
        flicks = list
    } else {
        const prefetchPage = usePrefetch('flicksList')

        const prefetchNext = useCallback(() => {
            console.log('prefetching next page')
            prefetchPage({ flickType, page: page + 1 })
        }, [prefetchPage, page])

        useEffect(() => {
            if (!isLoading) prefetchNext()
        }, [prefetchNext, isLoading])
    }

    const changeGenreHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGenre(e.target.value)
    }

    return (
        <>
            {!isLoading && (
                <section className={styles['flicks-list']}>
                    {!list && (
                        <div className={styles.filters}>
                            <select name="genre" id="genre-select" value={genre} onChange={changeGenreHandler}>
                                <option disabled>Genre</option>
                                {genreOptions.map((genre) => {
                                    return (
                                        <option value={genre.value} key={genre.value}>
                                            {genre.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                    )}
                    <ul data-testid="flicks-list">
                        {flicks?.map((item: Flick) => (
                            <FlickCard
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                poster_path={item.poster_path}
                                type={flickType || item.type}
                                year={item.year}
                            />
                        ))}
                    </ul>
                    <div className={styles.pagination}>
                        {!list && page > 1 && <button onClick={() => setPage((prev) => prev - 1)}>PREVIOUS</button>}
                        {!list && <button onClick={() => setPage((prev) => prev + 1)}>NEXT</button>}
                    </div>
                </section>
            )}
            {isError && <p>Error: please try again later.</p>}
            {!isError && list?.length === 0 && <p>Your watchlist is empty</p>}
            {isLoading && <Loader />}
        </>
    )
}

export default FlicksList
