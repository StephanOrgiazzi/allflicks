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
            query: ({ flickType, page, genre }) =>
                `discover/${flickType}?${apiKey}&sort_by=popularity.desc&vote_count.gte=300&with_genres=${genre}&page=${page}`,
            transformResponse: (res: any) => res.results,
            providesTags: ['Flicks']
        }),
        flick: builder.query({
            query: ({ flickType, flickId }) => `${flickType}/${flickId}?${apiKey}`,
            providesTags: ['Flicks']
        })
    })
})

export const { useFlicksListQuery, useFlickQuery, usePrefetch } = apiSlice