import { configureStore } from '@reduxjs/toolkit'

import { apiSlice } from './apiSlice'
import watchListReducer from './watchListSlice'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [apiSlice.reducerPath]
}

const persistedWatchlistReducer = persistReducer(persistConfig, watchListReducer)

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        watchList: persistedWatchlistReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }).concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
export const persistor = persistStore(store)
