import { useCallback, useEffect, useState } from 'react'
import { useFlicksListQuery, usePrefetch } from '../../store/apiSlice'
import FlickCard from '../FlickCard/FlickCard'
import styles from './FlicksList.module.scss'

export interface Flick {
    id: number
    title: string
    poster_path: string
    type: string
    year: number
}

function FlicksList({ type }: { type: string }) {
    const [page, setPage] = useState(1)
    const [flickType] = useState(type)

    const {
        data: flicks,
        isFetching,
        isLoading
    } = useFlicksListQuery({ flickType, page }, { refetchOnMountOrArgChange: true })

    const prefetchPage = usePrefetch('flicksList')

    const prefetchNext = useCallback(() => {
        console.log('prefetching next page')
        prefetchPage({ flickType, page: page + 1 })
    }, [prefetchPage, page])

    useEffect(() => {
        if (!isLoading) prefetchNext()
    }, [prefetchNext, isLoading])

    return (
        <>
            <ul className={styles['flicks-list']} data-testid="flicks-list">
                {flicks?.map((item: Flick) => (
                    <FlickCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        poster_path={item.poster_path}
                        type={flickType}
                        year={item.year}
                    />
                ))}
            </ul>
            <button onClick={() => setPage((prev) => prev + 1)}>NEXT</button>
        </>
    )
}

export default FlicksList
