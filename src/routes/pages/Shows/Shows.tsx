import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { listStateActions } from '../../../store/listStateSlice'
import Featured from '../../../components/Featured/Featured'
import FlicksList from '../../../components/FlicksList/FlicksList'

function Shows() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listStateActions.resetState())
    }, [])

    return (
        <div>
            <Featured type="tv" />
            <h2>Trending</h2>
            <FlicksList type="tv" />
        </div>
    )
}

export default Shows
