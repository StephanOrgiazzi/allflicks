import Featured from '../../../components/Featured/Featured'
import FlicksList from '../../../components/FlicksList/FlicksList'

function Movies() {
    return (
        <div>
            <Featured type="movie" />
            <h2>Trending</h2>
            <FlicksList type="movie" />
        </div>
    )
}

export default Movies
