import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Root from './pages/Root/Root'
import Error from './pages/Error/Error'
import Movies from './pages//Movies/Movies'
import Shows from './pages/Shows/Shows'
import WatchList from './pages/WatchList/WatchList'
import FlickPage from '../components/FlickPage/FlickPage'

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
