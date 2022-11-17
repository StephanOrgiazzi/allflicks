import { configureStore } from '@reduxjs/toolkit'

import { apiSlice } from './apiSlice'
import flicksListReducer from './flicksListSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        flicksList: flicksListReducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
