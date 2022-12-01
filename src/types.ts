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

type Movie = {
    id: number
    title: string
    poster_path: string
    backdrop_path: string
    overview: string
    release_date: string
    vote_average: number
    vote_count: number
    popularity: number
    original_language: string
    original_title: string
    genre_ids: number[]
}

type Show = {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
    overview: string
    first_air_date: string
    vote_average: number
    vote_count: number
    popularity: number
    original_language: string
    original_name: string
    genre_ids: number[]
}

export type { Flick, FlickElement, State, Movie, Show }
