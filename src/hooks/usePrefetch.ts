import { useCallback, useEffect } from "react"
import { usePrefetch } from "../store/apiSlice"

export const usePrefetchFlicks = (page: number, isLoading: boolean, flickType: string | undefined) => {
    const prefetchPage = usePrefetch('flicksList')
    const prefetchNext = useCallback(() => {
        prefetchPage({ flickType, page: page + 1 })
    }, [prefetchPage, page])

    useEffect(() => {
        if (!isLoading) { } prefetchNext()

    }, [prefetchNext, isLoading])
}