import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import FlickCard from '../components/FlickCard/FlickCard'

describe('FlickCard', () => {
    it('renders', () => {
        render(<FlickCard key={1} id={1} title="title" poster_path="poster_path" type="movie" year={2021} />, {
            wrapper: MemoryRouter
        })
    })
})
