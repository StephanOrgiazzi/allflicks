interface Flick {
    id: number
    title?: string
    name?: string
    poster_path: string
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
