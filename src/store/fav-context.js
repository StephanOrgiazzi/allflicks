import React, { useState } from 'react'

const FavContext = React.createContext({
    favMovies: [],
    onAddMovie: (id, title, poster_path, release_year) => { }
})

export const FavContextProvider = props => {
    const [favMovies, setFavMovies] = useState([])

    const addMovieHandler = (id, title, poster_path, release_year) => {
        const releaseYear = parseInt(release_year)
        const movie = { id, title, poster_path, releaseYear }
        const movies = favMovies.find(el => el.id === id)
            ? [...favMovies].filter(el => el.id !== id)
            : [...favMovies].concat(movie)

        setFavMovies(movies)
    }

    return <FavContext.Provider
        value={{
            favMovies: favMovies,
            onAddMovie: addMovieHandler
        }}>
        {props.children}
    </FavContext.Provider>
}

export default FavContext