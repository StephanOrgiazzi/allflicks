import Featured from '../../../components/Featured/Featured'
import FlicksList from '../../../components/FlicksList/FlicksList'
import { useResetListState } from '../../../hooks/useResetListState'

function Movies() {
    useResetListState()

    return (
        <div>
            <Featured type="movie" />
            <h2>Trending</h2>
            <FlicksList type="movie" />
        </div>
    )
}

export default Movies
