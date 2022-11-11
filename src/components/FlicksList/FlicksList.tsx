import { useCallback, useEffect, useState } from 'react'
import { useFlicksListQuery, usePrefetch } from '../../features/api/apiSlice'
import FlickCard from '../FlickCard/FlickCard'
import styles from './FlicksList.module.scss'

export interface Flick {
    id: number
    title: string
    poster_path: string
    year: number
}

function FlicksList() {
    const [page, setPage] = useState(1)
    const [flickType, setFlickType] = useState('movie')

    const { data: flicks, isFetching, isLoading } = useFlicksListQuery({ flickType, page })
    const prefetchPage = usePrefetch('flicksList')

    const prefetchNext = useCallback(() => {
        console.log('prefetching next page')
        console.log(flicks)
        prefetchPage(page + 1)
    }, [prefetchPage, page])

    useEffect(() => {
        if (!isLoading) prefetchNext()
    }, [prefetchNext, isLoading])

    return (
        <>
            <ul className={styles['flicks-list']}>
                {flicks?.map((item: Flick) => (
                    <FlickCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        poster_path={item.poster_path}
                        year={item.year}
                    />
                ))}
            </ul>
            <button onClick={() => setPage((prev) => prev + 1)}>NEXT</button>
        </>
    )
}

export default FlicksList
