import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import store from '../features/store'
import { apiSlice } from '../features/api/apiSlice'
import Movies from '../pages/Movies/Movies'

describe('Movies Page', () => {
    it('should render a list', async () => {
        render(
            <Provider store={store}>
                <ApiProvider api={apiSlice}>
                    <MemoryRouter>
                        <Movies />
                    </MemoryRouter>
                </ApiProvider>
            </Provider>
        )
        const list = await screen.findByTestId('flicks-list')
        expect(list).toBeInTheDocument()
    })
})
