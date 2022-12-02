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

type State = {
    watchList: {
        watchList: FlickElement[]
    }
}

export type { Flick, FlickElement, State }
