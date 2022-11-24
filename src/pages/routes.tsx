import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Root from './Root/Root'
import Error from './Error/Error'
import Movies from './Movies/Movies'
import Shows from './Shows/Shows'
import FlickPage from '../components/FlickPage/FlickPage'
import WatchList from './WatchList/WatchList'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<Error />}>
            <Route errorElement={<Error />}>
                <Route path="/movie/" element={<Movies />} />
                <Route path="/tv/" element={<Shows />} />
                <Route path="/:flickType/:flickId" element={<FlickPage />} />
                <Route path="/watchlist/" element={<WatchList />} />
            </Route>
        </Route>
    )
)
