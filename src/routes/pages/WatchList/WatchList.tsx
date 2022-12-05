import { State } from '../../../types'
import { useSelector } from 'react-redux'
import FlicksList from '../../../components/FlicksList/FlicksList'

function WatchList() {
    const state = useSelector((state: State) => state.watchList)

    return (
        <div>
            <h2>Watchlist</h2>
            <FlicksList list={state.watchList} />
        </div>
    )
}

export default WatchList
