import { useEffect, useState } from 'react'
import { genreOptions } from '../../../utils'
import styles from './Filters.module.scss'

function Filters() {
    const [genre, setGenre] = useState('all')

    const changeGenreHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGenre(e.target.value)
    }

    useEffect(() => {
        console.log(genre)
    }, [genre])

    return (
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
    )
}

export default Filters
