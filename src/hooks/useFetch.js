import { useState, useCallback } from 'react'

const useFetch = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const sendRequest = useCallback(async (url, setData) => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }

            const data = await response.json()
            setData(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }, [])

    return { loading, error, sendRequest }
}

export default useFetch