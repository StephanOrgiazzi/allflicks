import { useCallback, useEffect, useState } from 'react'
import { useFlicksListQuery, usePrefetch } from '../../store/apiSlice'
import FlickCard from '../FlickCard/FlickCard'
import { Flick } from '../../types'
import { genreOptions } from '../../utils'
import styles from './FlicksList.module.scss'

function FlicksList({ type }: { type: string }) {
    const [page, setPage] = useState(1)
    const [genre, setGenre] = useState('all')
    const [flickType] = useState(type)

    const changeGenreHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGenre(e.target.value)
    }

    const { data: flicks, isLoading } = useFlicksListQuery(
        { flickType, page, genre },
        { refetchOnMountOrArgChange: true }
    )

    const prefetchPage = usePrefetch('flicksList')

    const prefetchNext = useCallback(() => {
        console.log('prefetching next page')
        prefetchPage({ flickType, page: page + 1 })
    }, [prefetchPage, page])

    useEffect(() => {
        if (!isLoading) prefetchNext()
    }, [prefetchNext, isLoading])

    return (
        <section className={styles['flicks-list']}>
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
            <ul data-testid="flicks-list">
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
        </section>
    )
}

export default FlicksList
