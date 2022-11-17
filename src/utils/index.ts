export const convertTime = (time: number) => {
    const hours = Math.floor(time / 60)
    const minutes = time % 60
    return `${hours}h ${minutes}min`
}

export const genreOptions = [
    { value: '', name: 'All' },
    { value: '28', name: 'Action' },
    { value: '12', name: 'Adventure' },
    { value: '35', name: 'Comedy' },
    { value: '18', name: 'Drama' },
    { value: '36', name: 'History' },
    { value: '10749', name: 'Romance' },
    { value: '878', name: 'Sci-Fi' },
    { value: '53', name: 'Thriller' },
    { value: '10752', name: 'War' }
]
