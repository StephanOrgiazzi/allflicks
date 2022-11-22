import { useSelector } from 'react-redux'
import FlicksList from '../../components/FlicksList/FlicksList'
import { FlickElement } from '../../types'

function WatchList() {
    const state = useSelector((state: any) => state.watchList)

    console.log(state)

    return (
        <div>
            <h1>WatchList</h1>
            <FlicksList list={state.watchList} />
        </div>
    )
}

export default WatchList
