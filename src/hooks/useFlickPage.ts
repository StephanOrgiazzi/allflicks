import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { backdropBaseUrl, imgBaseUrl } from "../constants/global"
import { useFlickQuery } from "../store/apiSlice"
import { watchListActions } from "../store/watchListSlice"
import { State } from "../types"
import { convertTime } from "../utils"

export const useFlickPage = () => {
    const { flickType, flickId } = useParams()
    const { data, isLoading, isError } = useFlickQuery({ flickType, flickId }, { skip: !flickId })

    const dispatch = useDispatch()
    const state = useSelector((state: State) => state.watchList)
    const isInWatchList = state.watchList.some((item) => item.id === flickId)

    const { name, number_of_seasons, overview, tagline, title, vote_average: rating, id } = data || {}

    const genres = data?.genres?.map((genre: { id: number; name: string }) => `${genre.name}`).join(', ')
    const runtime = data?.runtime ? convertTime(data?.runtime) : `${number_of_seasons} Seasons`
    const cover = `${imgBaseUrl}${data?.poster_path}`
    const releaseYear = data?.release_date?.substring(0, 4)
    const backdrop = `${backdropBaseUrl}${data?.backdrop_path}`

    let navigate = useNavigate()

    useEffect(() => {
        if (id !== flickId && isError) navigate('/movie')
    }, [id, flickId, isError])

    const addToWatchListHandler = () => {
        dispatch(
            watchListActions.addFlick({
                id: flickId,
                type: flickType,
                title: title || name,
                poster_path: data?.poster_path,
                year: releaseYear
            })
        )
    }

    return {
        isLoading,
        isError,
        title: title || name,
        releaseYear,
        genres,
        runtime,
        cover,
        backdrop,
        tagline,
        overview,
        addToWatchListHandler,
        isInWatchList
    }
}