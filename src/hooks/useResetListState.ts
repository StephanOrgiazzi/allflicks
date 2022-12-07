import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { listStateActions } from '../store/listStateSlice'

export const useResetListState = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listStateActions.resetState())
    }, [])
}
