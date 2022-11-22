import { createSlice } from '@reduxjs/toolkit'

interface Flick {
    id: string
    type: string
}

const initialState = {
    watchList: []
}

const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
    reducers: {
        addFlick(state, action) {
            state.watchList = state.watchList.find((el: Flick) => el.id === action.payload.id)
                ? state.watchList.filter((el: Flick) => el.id !== action.payload.id)
                : state.watchList.concat(action.payload)
            console.log(state.watchList)
        }
    }
})

export const watchListActions = watchListSlice.actions

export default watchListSlice.reducer
