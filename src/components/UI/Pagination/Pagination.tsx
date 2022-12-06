import { useDispatch, useSelector } from 'react-redux'
import { listStateActions } from '../../../store/listStateSlice'

import styles from './Pagination.module.scss'

function Pagination({ hasPrev }: { hasPrev: boolean }) {
    const dispatch = useDispatch()

    const nextPageHandler = () => {
        dispatch(listStateActions.goNext())
        window.scrollTo(0, 0)
    }

    const backPageHandler = () => {
        dispatch(listStateActions.goPrev())
        window.scrollTo(0, 0)
    }

    return (
        <div className={styles.pagination}>
            {hasPrev && <button onClick={backPageHandler}>{'<'} Back</button>}
            {<button onClick={nextPageHandler}>Next {'>'}</button>}
        </div>
    )
}

export default Pagination
