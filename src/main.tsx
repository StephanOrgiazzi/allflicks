import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './pages/Root/Root'
import Error from './pages/Error/Error'
import Movies from './pages/Movies/Movies'
import Shows from './pages/Shows/Shows'
import FlickPage from './components/FlickPage/FlickPage'
import WatchList from './pages/WatchList/WatchList'

import { persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'

const router = createBrowserRouter(
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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    </React.StrictMode>
)
