import { useCallback, useEffect, useState } from 'react'
import { useFlicksListQuery, usePrefetch } from '../../store/apiSlice'
import FlickCard from '../FlickCard/FlickCard'
import Loader from '../UI/Loader/Loader'
import styles from './FlicksList.module.scss'
import Pagination from '../UI/Pagination/Pagination'
import Filter from '../UI/Filter/Filter'
import { Flick, FlickElement } from '../../types'

function FlicksList({ type, list }: { type?: string; list?: FlickElement[] }) {
    const [page, setPage] = useState(1)
    const [genre, setGenre] = useState('all')
    const [flickType] = useState(type)
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

    return (
        <>
            {!isLoading && (
                <section className={styles['flicks-list']}>
                    {!list && <Filter flickType={flickType} genre={genre} setGenre={setGenre} />}
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
