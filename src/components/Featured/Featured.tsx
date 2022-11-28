import { useFlicksListQuery } from '../../store/apiSlice'
import { backdropBaseUrl } from '../../constants/global'
import { Link } from 'react-router-dom'
import { Flick } from '../../types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

import 'swiper/css'
import styles from './Featured.module.scss'

function Featured({ type }: { type: string }) {
    const flickType = type
    const sortBy = 'vote_average'
    const page = 1
    const genre = ''

    const { data: flicks, isLoading, isError } = useFlicksListQuery({ flickType, sortBy, page, genre })
    return (
        <div className={styles.featured}>
            <h2>Best {flickType === 'tv' ? 'shows' : 'movies'}</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 2500,
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
    )
}

export default Featured
