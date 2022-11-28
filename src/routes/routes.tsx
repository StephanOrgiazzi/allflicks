import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Root from './pages/Root/Root'
import Loader from '../components/UI/Loader/Loader'

const Movies = React.lazy(() => import('./pages/Movies/Movies'))
const Shows = React.lazy(() => import('./pages/Shows/Shows'))
const WatchList = React.lazy(() => import('./pages/WatchList/WatchList'))
const FlickPage = React.lazy(() => import('../components/FlickPage/FlickPage'))
const Error = React.lazy(() => import('./pages/Error/Error'))

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<Error />}>
            <Route errorElement={<Error />}>
                <Route
                    path="/movie/"
                    element={
                        <React.Suspense fallback={<Loader />}>
                            <Movies />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/tv/"
                    element={
                        <React.Suspense fallback={<Loader />}>
                            <Shows />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/:flickType/:flickId"
                    element={
                        <React.Suspense fallback={<Loader />}>
                            <FlickPage />
                        </React.Suspense>
                    }
                />
                <Route
                    path="/watchlist/"
                    element={
                        <React.Suspense fallback={<Loader />}>
                            <WatchList />
                        </React.Suspense>
                    }
                />
            </Route>
        </Route>
    )
)
