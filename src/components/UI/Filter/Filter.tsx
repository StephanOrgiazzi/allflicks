import { movieGenreOptions, tvGenreOptions } from '../../../constants/global'

import styles from './Filter.module.scss'

function Filter({ flickType, genre, setGenre }: { flickType?: string; genre: string; setGenre: Function }) {
    const options = flickType === 'movie' ? movieGenreOptions : tvGenreOptions

    const changeGenreHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGenre(e.target.value)
    }

    return (
        <div className={styles.filters}>
            <select name="genre" id="genre-select" value={genre} onChange={changeGenreHandler}>
                <option disabled>Genre</option>
                {options.map((genre) => {
                    return (
                        <option value={genre.value} key={genre.value}>
                            {genre.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Filter
