import FlicksList from '../../components/FlicksList/FlicksList'
import Filters from '../../components/UI/Filters/Filters'

function Movies() {
    return (
        <div>
            <h1>Movies</h1>
            <Filters />
            <FlicksList type="movie" />
        </div>
    )
}

export default Movies
