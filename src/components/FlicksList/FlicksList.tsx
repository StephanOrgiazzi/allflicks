import { useCallback, useEffect, useState } from 'react'
import { useFlicksListQuery, usePrefetch } from '../../store/apiSlice'
import FlickCard from '../FlickCard/FlickCard'
import { Flick, FlickElement } from '../../types'
import { movieGenreOptions, tvGenreOptions } from '../../constants/global'
import Loader from '../UI/Loader/Loader'
import styles from './FlicksList.module.scss'
import Pagination from '../UI/Pagination/Pagination'

function FlicksList({ type, list }: { type?: string; list?: FlickElement[] }) {
    const [page, setPage] = useState(1)
    const [genre, setGenre] = useState('all')
    const [flickType] = useState(type)
    const genreOptions = flickType === 'movie' ? movieGenreOptions : tvGenreOptions
    const sortBy = 'popularity'

    const {
        data: flicks,
        isLoading,
        isError
    } = useFlicksListQuery({ flickType, sortBy, page, genre }, { refetchOnMountOrArgChange: true, skip: !type ?? list })

    const flickList = list ? list : flicks

    if (!list) {
        const prefetchPage = usePrefetch('flicksList')
        const prefetchNext = useCallback(() => {
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
                    <ul data-testid="data-flicks-list">
                        {flickList?.map((item: Flick) => (
                            <FlickCard
                                key={item.id}
                                id={item.id}
                                title={item.title ?? item.name}
                                poster_path={item.poster_path}
                                type={flickType || item.type}
                                year={item.year}
                            />
                        ))}
                    </ul>
                    {!list && <Pagination setPage={setPage} hasPrev={page > 1} />}
                </section>
            )}
            {isError && <p>Error: please try again later.</p>}
            {!isError && list?.length === 0 && <p>Your watchlist is empty</p>}
            {isLoading && <Loader />}
        </>
    )
}

export default FlicksList
