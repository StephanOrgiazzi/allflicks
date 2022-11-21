import { useCallback, useEffect, useState } from 'react'
import { useFlicksListQuery, usePrefetch } from '../../store/apiSlice'
import FlickCard from '../FlickCard/FlickCard'
import { Flick } from '../../types'
import { genreOptions, tvGenreOptions } from '../../constants/global'
import styles from './FlicksList.module.scss'
import Loader from '../UI/Loader/Loader'
import { useNavigate } from 'react-router-dom'

function FlicksList({ type }: { type: string }) {
    const [page, setPage] = useState(1)
    const [genre, setGenre] = useState('all')
    const [flickType] = useState(type)
    const navigate = useNavigate()

    const changeGenreHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGenre(e.target.value)
    }

    const {
        data: flicks,
        isLoading,
        isError
    } = useFlicksListQuery({ flickType, page, genre }, { refetchOnMountOrArgChange: true })

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
            {isLoading && <Loader />}
            {!isLoading && (
                <section className={styles['flicks-list']}>
                    <div className={styles.filters}>
                        <select name="genre" id="genre-select" value={genre} onChange={changeGenreHandler}>
                            <option disabled>Genre</option>
                            {type === 'movie' &&
                                genreOptions.map((genre) => {
                                    return (
                                        <option value={genre.value} key={genre.value}>
                                            {genre.name}
                                        </option>
                                    )
                                })}
                            {type === 'tv' &&
                                tvGenreOptions.map((genre) => {
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
            )}
            {isError && navigate('/error')}
        </>
    )
}

export default FlicksList
