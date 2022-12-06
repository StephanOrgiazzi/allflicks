import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    page: 1,
    genre: 'all'
}

const listStateSlice = createSlice({
    name: 'listState',
    initialState,
    reducers: {
        goNext(state) {
            state.page = state.page + 1
        },
        goPrev(state) {
            state.page = state.page - 1
        },
        changeGenre(state, action) {
            state.genre = action.payload
        }
    }
})

export const listStateActions = listStateSlice.actions
export default listStateSlice.reducer
