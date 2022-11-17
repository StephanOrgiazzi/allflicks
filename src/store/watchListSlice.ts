import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    watchList: []
}

const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
    reducers: {
        addFlick(state, action) {
            state.watchList = state.watchList.find((el) => el.id === id)
                ? state.watchList.filter((el) => el.id !== id)
                : state.watchList.concat(action.payload)
        }
    }
})

export const watchListActions = watchListSlice.actions

export default watchListSlice.reducer
