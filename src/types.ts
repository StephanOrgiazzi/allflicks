interface Flick {
    backdrop_path?: string
    id: number
    name?: string
    poster_path: string
    title?: string
    type: string
    year: number
}

interface FlickElement {
    id: string
    type: string
}

interface State {
    watchList: {
        watchList: FlickElement[]
    }
}

export type { Flick, FlickElement, State }
