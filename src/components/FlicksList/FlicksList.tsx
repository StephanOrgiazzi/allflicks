import { Flick, FlickElement, ListState } from '../../types'
import { useFlicksListQuery } from '../../store/apiSlice'
import { useSelector } from 'react-redux'
import usePrefetchFlicks from '../../hooks/usePrefetch'
import FlickCard from '../FlickCard/FlickCard'
import Loader from '../UI/Loader/Loader'
import Pagination from '../UI/Pagination/Pagination'
import Filter from '../UI/Filter/Filter'
import styles from './FlicksList.module.scss'

function FlicksList({ type, list }: { type?: string; list?: FlickElement[] }) {
    const page = useSelector<ListState, number>((state: ListState) => state.listState.page)
    const genre = useSelector<ListState, string>((state: ListState) => state.listState.genre)
    const flickType = type

    const {
        data: flicks,
        isLoading,
        isError
    } = useFlicksListQuery(
        { flickType, sortBy: 'popularity', page, genre },
        { refetchOnMountOrArgChange: true, skip: !type ?? list }
    )

    const flickList = list ? list : flicks

    if (!list) usePrefetchFlicks(page, isLoading, flickType)

    return (
        <>
            <section className={styles['flicks-list']}>
                {!list && <Filter flickType={flickType} genre={genre} />}
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
                {!list && <Pagination hasPrev={page > 1} />}
            </section>
            {isError && <p>Error: please try again later.</p>}
            {!isError && list?.length === 0 && <p>Your watchlist is empty</p>}
            {isLoading && <Loader />}
        </>
    )
}

export default FlicksList
