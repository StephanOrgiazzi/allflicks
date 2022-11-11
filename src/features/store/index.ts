import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
    flickType: 'movie'
}

const flickListSlice = createSlice({
    name: 'flickList',
    initialState,
    reducers: {
        selectType(state, action) {
            state.flickType = action.payload
        }
    }
})

const store = configureStore({
    reducer: flickListSlice.reducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const appointmentsActions = flickListSlice.actions

export default store
