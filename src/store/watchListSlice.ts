import { createSlice } from '@reduxjs/toolkit'
import { FlickElement } from '../types'

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
