import { useFlicksListQuery } from '../../store/apiSlice'
import { backdropBaseUrl } from '../../constants/global'
import { Link } from 'react-router-dom'
import { Flick } from '../../types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

import 'swiper/css'
import styles from './Featured.module.scss'
import Loader from '../UI/Loader/Loader'

function Featured({ type }: { type: string }) {
    const flickType = type
    const sortBy = 'vote_average'
    const page = 1
    const genre = ''

    const { data: flicks, isLoading, isError } = useFlicksListQuery({ flickType, sortBy, page, genre })

    return (
        <>
            {!isLoading && (
                <div className={styles.featured}>
                    <h2>Best {flickType === 'tv' ? 'TV shows' : 'Movies'}</h2>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        breakpoints={{
                            640: {
                                slidesPerView: 2
                            },
                            850: {
                                slidesPerView: 3
                            }
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        modules={[Autoplay]}
                        className={styles.swiper}
                    >
                        {flicks?.map(
                            (item: Flick) =>
                                item?.backdrop_path && (
                                    <SwiperSlide key={item.id}>
                                        <Link to={`/${flickType}/${item.id}`}>
                                            <div className={styles.featured__item}>
                                                <img
                                                    src={`${backdropBaseUrl}${item?.backdrop_path}`}
                                                    alt={item.title ?? item.name}
                                                />
                                                <p>{item.title ?? item.name}</p>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                )
                        )}
                    </Swiper>
                </div>
            )}
            {isError && <p>Error: please try again later.</p>}
            {isLoading && <Loader />}
        </>
    )
}

export default Featured
