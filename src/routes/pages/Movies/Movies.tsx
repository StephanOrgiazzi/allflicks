import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { listStateActions } from '../../../store/listStateSlice'
import Featured from '../../../components/Featured/Featured'
import FlicksList from '../../../components/FlicksList/FlicksList'

function Movies() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listStateActions.resetState())
    }, [])

    return (
        <div>
            <Featured type="movie" />
            <h2>Trending</h2>
            <FlicksList type="movie" />
        </div>
    )
}

export default Movies
