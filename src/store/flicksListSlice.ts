import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    flickType: 'movie'
}

const flicksListSlice = createSlice({
    name: 'flickList',
    initialState,
    reducers: {
        selectType(state, action) {
            state.flickType = action.payload
        }
    }
})

export const flicksListActions = flicksListSlice.actions

export default flicksListSlice.reducer
