import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl, apiKey } from '../constants/global'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl
    }),
    tagTypes: ['Flicks'],
    endpoints: (builder) => ({
        flicksList: builder.query({
            query: ({ flickType, sortBy, page, genre }) =>
                `discover/${flickType}?api_key=${apiKey}&sort_by=${sortBy}.desc&vote_count.gte=${sortBy === 'vote_average' ? '5000' : '700'}&with_genres=${genre}&page=${page}`,
            transformResponse: (res: { results: any }) => res.results,
            providesTags: ['Flicks'],
        }),
        flick: builder.query({
            query: ({ flickType, flickId }) => `${flickType}/${flickId}?api_key=${apiKey}`,
            providesTags: ['Flicks']
        })
    })
})

export const { useFlicksListQuery, useFlickQuery, usePrefetch } = apiSlice
