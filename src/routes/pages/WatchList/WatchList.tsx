import { useSelector } from 'react-redux'
import FlicksList from '../../../components/FlicksList/FlicksList'
import { State } from '../../../types'

function WatchList() {
    const state = useSelector((state: State) => state.watchList)

    return (
        <div>
            <h1>WatchList</h1>
            <FlicksList list={state.watchList} />
        </div>
    )
}

export default WatchList
