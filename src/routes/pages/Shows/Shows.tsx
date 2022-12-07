import Featured from '../../../components/Featured/Featured'
import FlicksList from '../../../components/FlicksList/FlicksList'

function Shows() {
    return (
        <div>
            <Featured type="tv" />
            <h2>Trending</h2>
            <FlicksList type="tv" />
        </div>
    )
}

export default Shows
