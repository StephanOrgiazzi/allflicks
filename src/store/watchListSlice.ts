import { FlickElement } from '../types'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    watchList: []
}

const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
    reducers: {
        addFlick(state, action) {
            state.watchList = state.watchList.find((el: FlickElement) => el.id === action.payload.id)
                ? state.watchList.filter((el: FlickElement) => el.id !== action.payload.id)
                : state.watchList.concat(action.payload)
        }
    }
})

export const watchListActions = watchListSlice.actions
export default watchListSlice.reducer
