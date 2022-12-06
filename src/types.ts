type Flick = {
    backdrop_path?: string
    id: number
    name?: string
    poster_path: string
    title?: string
    type: string
    year: number
}

type FlickElement = {
    id: string
    type: string
}

type WatchlistState = {
    watchList: {
        watchList: FlickElement[]
    }
}

type ListState = {
    listState: {
        page: number
        genre: string
    }
}


export type { Flick, FlickElement, WatchlistState, ListState }
