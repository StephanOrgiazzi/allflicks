import styles from './Pagination.module.scss'

function Pagination({ setPage, hasPrev }: { setPage: Function; hasPrev: boolean }) {
    const nextPageHandler = () => {
        setPage((page: number) => page + 1)
        window.scrollTo(0, 0)
    }

    const backPageHandler = () => {
        setPage((prev: number) => prev - 1)
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
