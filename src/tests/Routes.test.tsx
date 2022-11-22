import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import store from '../store'
import { apiSlice } from '../store/apiSlice'
import Movies from '../pages/Movies/Movies'
import Shows from '../pages/Shows/Shows'
import Root from '../pages/Root/Root'

describe('Movie route and Show route', () => {
    it('should render a nav element', () => {
        render(
            <Provider store={store}>
                <ApiProvider api={apiSlice}>
                    <MemoryRouter>
                        <Root />
                    </MemoryRouter>
                </ApiProvider>
            </Provider>
        )
        expect(screen.getByRole('navigation')).toBeInTheDocument()
    })

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

    it('should render a list', async () => {
        render(
            <Provider store={store}>
                <ApiProvider api={apiSlice}>
                    <MemoryRouter>
                        <Shows />
                    </MemoryRouter>
                </ApiProvider>
            </Provider>
        )
        const list = await screen.findByTestId('flicks-list')
        expect(list).toBeInTheDocument()
    })
})
