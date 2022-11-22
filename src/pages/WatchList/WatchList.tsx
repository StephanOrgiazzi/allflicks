import { useSelector } from 'react-redux'
import FlicksList from '../../components/FlicksList/FlicksList'
import { Flick } from '../../types'

function WatchList() {
    // const list = [
    //     {
    //         id: 436270,
    //         title: 'The Shawshank Redemption',
    //         poster_path: '/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
    //         type: 'movie',
    //         year: 1994
    //     }
    // ]

    const state = useSelector((state: any) => state.watchList)

    return (
        <div>
            <h1>WatchList</h1>
            <FlicksList list={state.watchList} />
        </div>
    )
}

export default WatchList
